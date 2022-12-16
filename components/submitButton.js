import React from "react";
import { cn } from "../lib/helpers";
import Spinner from "./spinner";

export default function SubmitButton({ buttonText, loading }) {
  return (
    <button
      type="submit"
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-700 hover:bg-indigo-600 transition ease-in-out duration-150",
        loading ? "cursor-not-allowed" : ""
      )}
      disabled={loading}
    >
      {loading ? <Spinner /> : buttonText}
    </button>
  );
}
