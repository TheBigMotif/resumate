// Hay que importar las respuestas de opcion multiple de un data.js. para hacer mas leible el codigo

const people = [
    { id: 1, name: 'HTLM' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'Javascript' },
    { id: 4, name: 'Node.js' },
    { id: 5, name: 'MySQL' },
  ];
  
  const App = () => {
    return (
      <div className="px-24 bg-gray-50">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-base leading-6 text-gray-600">
              ✅ To prevent any mistakes, please review the information carefully for accurate resume creation.
            </p>
          </div>
  
          <form className="my-24 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 md:pl-12">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="Mauricio"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Botti"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      placeholder="mauricio@resumate.com"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-4">
                  <label htmlFor="github" className="block text-sm font-medium leading-6 text-gray-900">
                    GitHub
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                      Github.com/
                    </span>
                    <input
                      id="github"
                      name="github"
                      type="text"
                      autoComplete="no"
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-4">
                  <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
                    Describe yourself:
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-6">
                  <fieldset>
                    <legend className="text-base font-semibold leading-6 text-gray-900">Technical Skills</legend>
                    <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                      {people.map((person) => (
                        <div key={person.id} className="relative flex items-start py-4">
                          <div className="min-w-0 flex-1 text-sm leading-6">
                            <label htmlFor={`person-${person.id}`} className="select-none font-medium text-gray-900">
                              {person.name}
                            </label>
                          </div>
                          <div className="ml-3 flex h-6 items-center">
                            <input
                              id={`person-${person.id}`}
                              name={`person-${person.id}`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
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
  