import Groq from "groq-sdk";


const groq = new Groq({ 
  apiKey: process.env.GROQ_API_KEY 
});

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

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "llama-3.3-70b-versatile",
    });

    const response = completion.choices[0].message.content;
    return Response.json({ message: response });

  } catch (error) {
    console.log("ERROR:", error.message);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}