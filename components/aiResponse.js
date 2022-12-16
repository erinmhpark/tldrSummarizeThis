export default function AiResponse({ apiResponse, responseText }) {
  return (
    <div className="flex flex-col justify-between min-w-full">
      <hr className="my-6 bg-gray-200 border-1 h-px dark:bg-gray-700" />
      {apiResponse ? (
        <div className="p-1 rounded-md">
          <div className="text-gray-500">{apiResponse && responseText} </div>
          {apiResponse ? <p className="p-1">{apiResponse}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
