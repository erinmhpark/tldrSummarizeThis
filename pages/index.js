import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/helpers";

export default function Home() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

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

    const summaryData = await response.json();
    setSummary(summaryData.result.choices[0].text);
    setLoading(false);
  }

  return (
    <div className="px-2 py-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <Head>
        <title>TL;DR Summarize this</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-3 px-0 gap-1 flex flex-col justify-center items-center min-h-screen">
        <h1 className="p-1 text-6xl font-bold">TL;DR Summarize This</h1>
        <div className="p-2">Feed something to summarize</div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            placeholder="Summarize this:"
            className="text-black placeholder-gray-500 w-96 h-44 p-3 rounded-sm"
            type="text"
            name="prompt"
            disabled={loading}
          />
          <div className="flex justify-evenly mt-5">
            <button
              type="reset"
              className="px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md  bg-gray-500 hover:bg-gray-400 transition ease-in-out duration-150"
            >
              Reset
            </button>
            <button
              type="Submit"
              className={cn(
                "inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-700 hover:bg-indigo-600 transition ease-in-out duration-150",
                loading ? "cursor-not-allowed" : ""
              )}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-between w-1/2 ">
          <hr className="my-5 bg-gray-200 border-0 h-px dark:bg-gray-700" />
          <div className="p-1 rounded-md ">
            Summary: {summary ? <p className="w-100 p-1">{summary}</p> : null}
          </div>
        </div>
      </main>
      <footer className="flex justify-evenly inset-x-0 p-2 bottom-0 fixed text-slate-600 font-medium">
        <div>© 2022 Minhee Park</div>
        <Link href="https://openai.com/">Powered by&nbsp; OpenAI</Link>
        <div className="flex justify-around gap-4 pr-10">
          <a href="https://github.com/erinmhpark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-6 w-6"
            >
              <path
                fill="gray"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
