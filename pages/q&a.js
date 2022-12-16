import Head from "next/head";
import React from "react";
import QuestionAnswer from "../components/questionAnswer";

export default function QuestionPage() {
  return (
    <div className="w-7/12">
      <Head>
        <title>Ask Me Anything</title>
        <meta name="description" content="Ask any question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuestionAnswer />
    </div>
  );
}
