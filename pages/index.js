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
    const initialPrompt =
      "Summarize this for a second-grade student:\n" + data.prompt;
    console.log(initialPrompt);
    // console.log(formData);
    // console.log(data.prompt);

    const response = await fetch("/api/openAI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: initialPrompt }),
    });

    const summaryData = await response.json();
    setSummary(summaryData.result.choices[0].text);
    console.log(summary);
    setLoading(false);
  }

  return (
    <div className="px-2 py-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <Head>
        <title>TL;DR Summarize this</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-4 px-0 gap-2 flex flex-col justify-center items-center min-h-screen">
        <h1 className="p-1 text-6xl font-bold">TL;DR Summarize This</h1>
        <div className="p-2">Feed something to summarize</div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            placeholder="Summarize this: "
            className="text-black placeholder-gray-500 w-96 h-44 p-3 rounded-sm"
            type="text"
            name="prompt"
            disabled={loading}
          />
          <div className="flex justify-evenly">
            <input type="reset" />
            <input
              className="border border-white p-1 rounded-md disabled:bg-red-500"
              type="submit"
              disabled={loading}
            />
          </div>
          <button
            type="Submit"
            className={cn(
              "inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150",
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
        </form>

        <div className="flex justify-between border">
          <div className="p-1">Original:&nbsp; </div>
          <div className="p-1">Summary:</div>
        </div>

        {summary ? <p>{summary}</p> : null}
      </main>

      <footer className="flex justify-evenly p-2 static bottom-0">
        <div> © Minhee Park</div>
        <Link href="https://openai.com/">Powered by&nbsp; OpenAI</Link>
        <div className="flex justify-around gap-4">
          <Link href="/">Github</Link>
          <Link href="/">Github</Link>
        </div>
      </footer>
    </div>

    // To dos
    // Make the footer stick to the bottom
    //
    // <div className={styles.container}>
    //
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    // </div>
  );
}
