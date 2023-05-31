import { ApolloClient } from "@apollo/client";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EXPERIENCE } from "../utils/mutations";

// import { set } from "../../../server/models/Education";

const App = () => {
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   window.location.href = "/personaldata";
  // };

  const [inputValue, setInputValue] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [generatedText, setgeneratedText] = useState("");
  const [generatetext, { data }] = useMutation(GENERATE_TEXT);
  const handleJobDescription = (event) => {
    setjobDescription(event.target.value);

    console.log(inputValue);
  };

  const handleSubmitGPT = async (event) => {
    event.preventDefault();
    const result = await generatetext({
      variables: {
        prompt: `I am writing a resume, I was a \n role: ${inputValue} \n. My responsibilities were ${jobDescription}. \n . Can you write 10 points for a resume on what I did?`,
      },
      // variables: { prompt: inputValue },
    });

    /* --------------------------------- prompt --------------------------------- */

    /* --------------------------------- prompt --------------------------------- */

    setgeneratedText(result.data.generateText.data);

    // Here you can send the inputValue to OpenAI
  };

  const [userFormData, setUserFormData] = useState({
    StartingDate: "",
    EndDate: "",
    Company: "",
    Degree: "",
    Responsibilities: "",
    Role: "",
  });

  const [addExperience] = useMutation(ADD_EXPERIENCE);
  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExperience({
        variables: { ...userFormData },
      });
      console.log(data);
      window.location.replace("/education");
    } catch (err) {
      console.error(err);
    }

    //

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
          action="#"
          className="my-24 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 md:pl-12"
        >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Starting Date
                </label>
                <div className="mt-2">
                  <input
                    value={userFormData.StartingDate}
                    onChange={handleInputChange}
                    type="text"
                    name="StartingDate"
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
                  End Date
                </label>
                <div className="mt-2">
                  <input
                    value={userFormData.EndDate}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Botti"
                    name="EndDate"
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
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    value={userFormData.Company}
                    onChange={handleInputChange}
                    id="email"
                    placeholder="mauricio@resumate.com"
                    name="Company"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Degree
                </label>
                <div className="mt-2">
                  <input
                    value={userFormData.Degree}
                    onChange={handleInputChange}
                    id="password"
                    placeholder="mauricio@resumate.com"
                    name="Degree"
                    type="password"
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
                  Responsibilities
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                    Github.com/
                  </span>
                  <input
                    value={userFormData.Responsibilities}
                    onChange={handleInputChange}
                    id="github"
                    name="Responsibilities"
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
                  Role
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                    Linkedin.com/in/
                  </span>
                  <input
                    value={userFormData.Role}
                    onChange={handleInputChange}
                    id="linkedin"
                    name="Role"
                    type="text"
                    autoComplete="off"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              // onSubmit={handleFormSubmit}
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
