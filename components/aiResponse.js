export default function AiResponse({ path, summary }) {
  const responseText = path === "q&a" ? "Answer: " : "Summary: ";
  return (
    <div className="flex flex-col justify-between w-1/2 ">
      <hr className="my-5 bg-gray-200 border-0 h-px dark:bg-gray-700" />
      <div className="p-1 rounded-md ">
        {responseText} {summary ? <p className="w-100 p-1">{summary}</p> : null}
      </div>
    </div>
  );
}
