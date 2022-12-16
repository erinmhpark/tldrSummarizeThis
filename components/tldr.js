import { useRef, useState } from "react";
import AiResponse from "../components/aiResponse";
import SubmitButton from "../components/submitButton";
import ResetButton from "./resetButton";

export default function Tldr() {
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const placeholderText =
    "A hydrogen bond is a weak bond between two molecules resulting from an electrostatic attraction between a proton in one molecule and an electronegative atom in the other.";

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const initialPrompt = "Summarize this:\n" + data.prompt;

    const response = await fetch("/api/openAI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: initialPrompt }),
    });

    const apiData = await response.json();
    setApiResponse(apiData.result.choices[0].text);
    setLoading(false);
  }

  const handleReset = () => {
    formRef.current.reset();
    setApiResponse("");
  };

  return (
    <div className="flex flex-col gap-1 items-center">
      <h1 className="p-1 text-6xl text-center font-bold">TL;DR Summary</h1>
      <h2 className="p-2 text-gray-400">
        Enter text below to generate a summary
      </h2>
      <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col">
        <textarea
          placeholder={placeholderText}
          className="text-black placeholder-gray-500 w-96  h-44 p-3 rounded-sm"
          type="text"
          name="prompt"
          disabled={loading}
        />
        <div className="flex justify-between mt-5">
          <ResetButton loading={loading} handleReset={handleReset} />
          <SubmitButton loading={loading} buttonText={"Summarize"} />
        </div>
      </form>
      <AiResponse responseText={"Summary: "} apiResponse={apiResponse} />
    </div>
  );
}
