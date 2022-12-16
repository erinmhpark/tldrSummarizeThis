import Head from "next/head";
import Tldr from "../components/tldr";

export default function Home() {
  return (
    <div className="w-7/12">
      <Head>
        <title>TL;DR Summarize this</title>
        <meta name="description" content="Generated a summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tldr />
    </div>
  );
}
