import { useState } from "react";
// import { generatetext } from "../../../server/controllers/openaiController";
const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // generatetext(inputValue);
    // Here you can send the inputValue to OpenAI
  };
  return (
    <div className="px-24 bg-gray-50">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-base leading-6 text-gray-600">
            ✅ To prevent any mistakes, please review the information carefully
            for accurate resume creation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="my-24 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 md:pl-12"
        >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    value={inputValue}
                    onChange={handleChange}
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
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
                <label
                  htmlFor="github"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
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
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  LinkedIn
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                    Linkedin.com/in/
                  </span>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    autoComplete="off"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>🇦🇫 Afghanistan</option>
                    <option>🇩🇿 Algeria</option>
                    <option>🇦🇷 Argentina</option>
                    <option>🇦🇺 Australia</option>
                    <option>🇧🇩 Bangladesh</option>
                    <option>🇧🇷 Brazil</option>
                    <option>🇨🇦 Canada</option>
                    <option>🇨🇱 Chile</option>
                    <option>🇨🇳 China</option>
                    <option>🇨🇴 Colombia</option>
                    <option>🇨🇩 DR Congo</option>
                    <option>🇪🇬 Egypt</option>
                    <option>🇪🇹 Ethiopia</option>
                    <option>🇫🇷 France</option>
                    <option>🇩🇪 Germany</option>
                    <option>🇬🇭 Ghana</option>
                    <option>🇬🇷 Greece</option>
                    <option>🇮🇳 India</option>
                    <option>🇮🇩 Indonesia</option>
                    <option>🇮🇷 Iran</option>
                    <option>🇮🇶 Iraq</option>
                    <option>🇮🇹 Italy</option>
                    <option>🇯🇵 Japan</option>
                    <option>🇰🇪 Kenya</option>
                    <option>🇲🇾 Malaysia</option>
                    <option>🇲🇽 Mexico</option>
                    <option>🇲🇦 Morocco</option>
                    <option>🇲🇲 Myanmar</option>
                    <option>🇳🇵 Nepal</option>
                    <option>🇳🇬 Nigeria</option>
                    <option>🇵🇰 Pakistan</option>
                    <option>🇵🇪 Peru</option>
                    <option>🇵🇭 Philippines</option>
                    <option>🇵🇱 Poland</option>
                    <option>🇷🇺 Russia</option>
                    <option>🇸🇦 Saudi Arabia</option>
                    <option>🇿🇦 South Africa</option>
                    <option>🇰🇷 South Korea</option>
                    <option>🇪🇸 Spain</option>
                    <option>🇸🇩 Sudan</option>
                    <option>🇹🇭 Thailand</option>
                    <option>🇹🇷 Turkey</option>
                    <option>🇺🇬 Uganda</option>
                    <option>🇺🇦 Ukraine</option>
                    <option>🇦🇪 United Arab Emirates</option>
                    <option>🇬🇧 United Kingdom</option>
                    <option>🇺🇸 United States</option>
                    <option>🇻🇪 Venezuela</option>
                    <option>🇻🇳 Vietnam</option>
                    <option>🇾🇪 Yemen</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="New York City"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    placeholder="New York"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900 rounded-lg px-8 py-3 shadow-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm font-semibold leading-6 text-white rounded-lg px-8 py-3 shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-red-500 hover:to-yellow-500 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
