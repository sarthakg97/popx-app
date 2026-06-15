import { useState, useEffect } from "react";

export default function TypeWriter({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    // ← Strong check!
    if (!text || typeof text !== "string") return;
    
    setDisplayed("");
    const words = text.split(" ");
    const timeouts = [];

    words.forEach((word, index) => {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + (prev ? " " : "") + word);
      }, index * 50);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
      setDisplayed("");
    };
  }, [text]);

  return <div>{displayed}</div>;
}