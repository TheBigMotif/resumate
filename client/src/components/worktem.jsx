import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EXPERIENCE } from "../utils/mutations";

export default function Experience() {
  const [userFormData, setUserFormData] = useState({
    StartingDate: "",
    EndDate: "",
    Company: "",
    Degree: "",
    Reponsibilities: "",
    Role: "",
  });

  const [addExperience] = useMutation(ADD_EXPERIENCE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // const [inputValue, setInputValue] = useState("");
  // const [jobDescription, setjobDescription] = useState("");
  // const [generatedText, setgeneratedText] = useState("");
  // const [generatetext, { data }] = useMutation(GENERATE_TEXT);

  const handleJobDescription = (event) => {
    setjobDescription(event.target.value);
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

    /* --------------------------------- prompt --------------------------------- */

    /* --------------------------------- prompt --------------------------------- */

    setgeneratedText(result.data.generateText.data);

    // Here you can send the inputValue to OpenAI
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // window.location.replace("/education");
  };
  return (
    <div className="pt-20 px-28 pb-28 bg-gray-50">
      <div className="space-y-10 divide-y divide-gray-900/10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          {/* Section header */}
          <div className="px-14 sm:px-0">
            <h2 className="font-semibold leading-7 text-gray-900 text-2xl">
              Experience 💼
            </h2>
            <p className="mt-1 text-base leading-6 text-gray-600">
              Tell us about your work experience (need copywriting)
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-white ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 px-4 sm:px-40"
          >
            <div className="px-0 py-6 sm:p-8 shadow-lg">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Form input */}

                <div className="col-span-full">
                  <div className="isolate -space-y-px rounded-md shadow-sm">
                    <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-teal-400">
                      <label
                        htmlFor={`company-name-`}
                        className="mt-2 block text-base font-medium text-gray-900"
                      >
                        Company Name
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="Company"
                        id={`company-name`}
                        className="form-input px-3 py-2 text-sm md:text-xl"
                        placeholder="Example Company"
                        value={userFormData.Company}
                      />
                      <label
                        htmlFor={`job-title-`}
                        className="mt-2 block text-base font-medium text-gray-900"
                      >
                        Job Title
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="Role"
                        id="job-title"
                        className="form-input px-3 py-2 text-sm md:text-xl"
                        placeholder="Front-end Developer"
                        value={userFormData.Role}
                      />
                    </div>
                    <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-teal-400">
                      <label
                        htmlFor={`start-date-`}
                        className="mt-4 block text-base font-medium text-gray-900"
                      >
                        Start Date
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        name="StartingDate"
                        id="start-date"
                        className="form-input px-3 py-2 text-gray-400 text-sm md:text-xl"
                        value={userFormData.StartingDate}
                      />
                      <label
                        htmlFor={`end-date-`}
                        className="mt-4 block text-base font-medium text-gray-900"
                      >
                        End Date
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        name="EndDate"
                        id="EndDate"
                        className="form-input px-3 py-2 text-gray-400 text-sm md:text-xl"
                        value={userFormData.EndDate}
                      />
                    </div>
                  </div>
                  {experiences.length > 1 && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="mt-2 rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-red-600 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                        onClick={() =>
                          handleDeleteExperienceClick(experience.id)
                        }
                      >
                        Remove Experience
                      </button>
                    </div>
                  )}
                </div>

                <div className="col-span-full">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="mt-5 rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-emerald-600 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                      onClick={handleAddExperienceClick}
                    >
                      + Add Experience
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form actions */}
            <div className="flex items-center justify-end mt-4 md:mt-0 border-t border-gray-900/10 px-4 py-20 sm:px-8">
              <button
                type="button"
                className="text-lg font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <div className="flex-grow" />{" "}
              {/* Empty div to push the buttons to the right */}
              <button
                type="submit"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-fuchsia-500 bg-gradient-to-r from-blue-500 to-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save & Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
