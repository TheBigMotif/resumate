import React, { useState } from "react";

export default function Test() {
  const [state, setstate] = useState("openaiPrompt");
  const [user, setuser] = useState("userPrompt");
  // From apollo client, hooks:
  // use query
  // use mutation
  // module 22 state act 18, solved folder, client, component

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mt-30">
        <label
          htmlFor="openAI"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Open AI
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            value={state}
            name="openAI"
            id="openAI"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="mt-30">
        <label
          htmlFor="user"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          USER
        </label>
        <div className="mt-2">
          <textarea
            onChange={(e) => setuser(e.target.value)}
            rows={4}
            value={user}
            name="user"
            id="user"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
        <button
          type="button"
          className="mt-2 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          SEND!
        </button>
      </div>
    </div>
  );
}
