import React from "react";

export default function ResetButton({ loading, handleReset }) {
  return (
    <button
      type="button"
      onClick={handleReset}
      disabled={loading}
      className="px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md  bg-gray-500 hover:bg-gray-400 transition ease-in-out duration-150"
    >
      Reset
    </button>
  );
}
