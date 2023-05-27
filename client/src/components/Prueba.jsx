import { useState } from 'react';

export default function Education() {
  const [educations, setEducations] = useState([
    {
      id: 1,
      name: '',
      degreeTitle: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const handleAddEducationClick = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      {
        id: prevEducations.length + 1,
        name: '',
        degreeTitle: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  const handleDeleteEducationClick = (id) => {
    setEducations((prevEducations) => prevEducations.filter((education) => education.id !== id));
  };

  const handleEducationChange = (id, field, value) => {
    setEducations((prevEducations) =>
      prevEducations.map((education) =>
        education.id === id ? { ...education, [field]: value } : education
      )
    );
  };

  return (
    <div className="pt-20 px-28 pb-28 bg-gray-50">
      <div className="space-y-10 divide-y divide-gray-900/10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          {/* Section header */}
          <div className="px-14 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Education 🎓</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Tell us about your education (need copywriting)
            </p>
          </div>

          {/* Form */}
          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 px-4 sm:px-40">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Form input */}
                {educations.map((education) => (
                  <div className="col-span-full" key={education.id}>
                    <div className="isolate -space-y-px rounded-md shadow-sm">
                      <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                        <label htmlFor={`name-${education.id}`} className="mt-2 block text-xs font-medium text-gray-900">
                          School Name
                        </label>
                        <input
                          type="text"
                          name={`name-${education.id}`}
                          id={`name-${education.id}`}
                          className="form-input px-3 py-2"
                          placeholder="Mauricio Trevino"
                          value={education.name}
                          onChange={(e) => handleEducationChange(education.id, 'name', e.target.value)}
                        />
                        <label htmlFor={`degree-title-${education.id}`} className="mt-2 block text-xs font-medium text-gray-900">
                          Degree Title
                        </label>
                        <input
                          type="text"
                          name={`degree-title-${education.id}`}
                          id={`degree-title-${education.id}`}
                          className="form-input px-3 py-2"
                          placeholder="Jr front-end"
                          value={education.degreeTitle}
                          onChange={(e) => handleEducationChange(education.id, 'degreeTitle', e.target.value)}
                        />
                      </div>
                      <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                        <label htmlFor={`start-date-${education.id}`} className="mt-4 block text-xs font-medium text-gray-900">
                          Start Date
                        </label>
                        <input
                          type="date"
                          name={`start-date-${education.id}`}
                          id={`start-date-${education.id}`}
                          className="form-input px-3 py-2 text-gray-400"
                          value={education.startDate}
                          onChange={(e) => handleEducationChange(education.id, 'startDate', e.target.value)}
                        />
                        <label htmlFor={`end-date-${education.id}`} className="mt-4 block text-xs font-medium text-gray-900">
                          End Date
                        </label>
                        <input
                          type="date"
                          name={`end-date-${education.id}`}
                          id={`end-date-${education.id}`}
                          className="form-input px-3 py-2 text-gray-400"
                          value={education.endDate}
                          onChange={(e) => handleEducationChange(education.id, 'endDate', e.target.value)}
                        />
                      </div>
                    </div>
                    {educations.length > 1 && (
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="mt-2 rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                          onClick={() => handleDeleteEducationClick(education.id)}
                        >
                          Remove Education
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                <div className="col-span-full">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="mt-5 rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                      onClick={handleAddEducationClick}
                    >
                      + Add Education
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form actions */}
            <div className="flex items-center justify-end mt-4 md:mt-0 border-t border-gray-900/10 px-4 py-20 sm:px-8">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <div className="flex-grow" /> {/* Empty div to push the buttons to the right */}
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
