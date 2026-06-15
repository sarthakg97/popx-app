import Groq from "groq-sdk";

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GROQ_API_KEY environment variable is not set. Please configure it in Vercel or your .env.local file."
    );
  }
  return new Groq({ apiKey });
}

function getErrorResponse(error) {
  const message =
    error?.message || error?.response?.statusText || "An unexpected error occurred.";

  const isQuotaError = /too many requests|quota exceeded|rate limit/i.test(message);
  const status =
    error?.status || error?.response?.status || (isQuotaError ? 429 : 500);

  const userMessage = isQuotaError
    ? "Groq quota exceeded. Check your Groq API quota, billing, or model limits and try again later."
    : `Error: ${message}`;

  return { status, message: userMessage };
}

export async function POST(request) {
  try {
    const { message } = await request.json();
    const groq = getGroqClient();

    // Try models in order of preference
    const modelPreferences = (process.env.GROQ_MODEL || "").split(",").filter(m => m.trim());
    const fallbackModels = ["llama-3.1-70b-versatile", "llama-3.1-8b-instant", "mixtral-8x7b-32768"];
    const modelsToTry = [...modelPreferences, ...fallbackModels];

    let completion = null;
    let lastError = null;

    for (const model of modelsToTry) {
      try {
        console.log(`Attempting to use model: ${model}`);
        completion = await groq.chat.completions.create({
          messages: [{ role: "user", content: message }],
          model: model.trim(),
        });
        console.log(`Successfully used model: ${model}`);
        break; // Success, exit loop
      } catch (modelError) {
        lastError = modelError;
        const errCode = modelError?.error?.code;
        const errMsg = modelError?.error?.message || String(modelError);
        console.log(`Model ${model} failed: ${errMsg}`);

        // If it's a decommissioned or not-found error, try next model
        if (errCode === "model_decommissioned" || errCode === "model_not_found") {
          continue;
        }
        // For other errors (e.g., auth, rate limit), throw immediately
        throw modelError;
      }
    }

    if (!completion) {
      throw lastError || new Error("All configured models are unavailable. Check your Groq API key and available models at https://console.groq.com/keys");
    }

    // Debug logs: request and raw completion object
    console.log("Request message:", message);
    try {
      console.log("Completion object:", JSON.stringify(completion, null, 2));
    } catch (e) {
      console.log("Could not stringify completion object:", e);
    }

    // Robust extraction of the assistant reply
    let response = "";
    if (completion?.choices && completion.choices.length > 0) {
      const msg = completion.choices[0].message;
      if (typeof msg === "string") response = msg;
      else if (msg?.content) {
        if (typeof msg.content === "string") response = msg.content;
        else if (Array.isArray(msg.content)) {
          response = msg.content
            .map((c) => (typeof c === "string" ? c : c?.text || JSON.stringify(c)))
            .join("");
        } else if (msg.content?.text) response = msg.content.text;
      }
    }

    if (!response) {
      try {
        response = String(completion?.choices?.[0]?.message ?? completion ?? "");
      } catch (e) {
        console.log("Response extraction failed:", e);
      }
    }

    if (!response) response = "No response from the model. Please try again.";

    return Response.json({ message: response });

  } catch (error) {
    try {
      console.error("ERROR:", error);
      if (error && error.stack) console.error(error.stack);
    } catch (logErr) {
      console.error("Failed to log error stack:", logErr);
    }

    // Handle Groq model errors specifically
    const errMsg = error?.error?.message || error?.message || String(error || "");
    const errCode = error?.error?.code;
    const isModelDecommissioned = errCode === "model_decommissioned" || /decommissioned/i.test(errMsg);
    const isModelNotFound = errCode === "model_not_found" || /does not exist|no access/i.test(errMsg);

    if (isModelDecommissioned) {
      return Response.json(
        {
          message:
            "The configured Groq model has been decommissioned. Set the environment variable GROQ_MODEL to a supported model (e.g., GROQ_MODEL=mixtral-8x7b-32768). See https://console.groq.com/docs/deprecations.",
        },
        { status: 400 }
      );
    }

    if (isModelNotFound) {
      return Response.json(
        {
          message:
            "The configured Groq model is not available or you don't have access to it. Try setting GROQ_MODEL=mixtral-8x7b-32768 or check https://console.groq.com/keys for available models.",
        },
        { status: 400 }
      );
    }

    const debugMessage = error?.message || String(error) || "Unknown server error";
    return Response.json(
      { message: `Server error: ${debugMessage}` },
      { status: 500 }
    );
  }
}