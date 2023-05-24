import { frontendStacks } from "../../data/developerQ";


const DeveloperTools = () => {
  return (
    <fieldset>
      <legend className="text-base font-semibold leading-6 text-gray-900">Technical Skills</legend>
      <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        {frontendStacks.map((stack) => (
          <div key={stack.id} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`stack-${stack.id}`} className="select-none font-medium text-gray-900">
                {stack.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`stack-${stack.id}`}
                name={`stack-${stack.id}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

const App = () => {
  return (
    <div className="px-24 bg-gray-50">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Technical Skills</h2>
          <p className="mt-1 text-base leading-6 text-gray-600">✅ Select your experience stacks</p>
        </div>

        <form className="my-24 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 md:pl-12">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <DeveloperTools />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900 rounded-lg px-8 py-3 shadow-lg">
              Cancel
            </button>
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-50 rounded-lg px-8 py-3 shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-red-500 hover:to-yellow-500 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
