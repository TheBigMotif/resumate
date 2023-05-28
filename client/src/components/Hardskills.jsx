import { useState } from 'react';

export default function Experience() {
  const [skills, setSkills] = useState([
    {
      id: 1,
      value: '💻 HTML, CSS, Javascript, Node.js, TS, Tailwind CSS, Ruby on Rails, SQL, Git, AWS, etc',
    },
  ]);

  const handleAddSkillsClick = () => {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        id: prevSkills.length + 1,
        value: '',
      },
    ]);
  };

  const handleDeleteSkillsClick = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  const handleSkillsChange = (id, value) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) => (skill.id === id ? { ...skill, value } : skill))
    );
  };

  return (
    <div className="mt-20 ml-28 pr-20">
      <div className="space-y-10 divide-y divide-gray-900/10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          {/* Section header */}
          <div className="px-14 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Hard Skills</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Tell us about your skills (need copywriting)
            </p>
          </div>

          {/* Form */}
          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 px-4 sm:px-40">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Form input */}
                {skills.map((skill) => (
                  <div className="col-span-full" key={skill.id}>
                    <label htmlFor={`skill-${skill.id}`} className="block text-sm font-medium leading-6 text-gray-900">
                      Hard Skills
                    </label>
                    <div className="mt-2">
                      <textarea
                        id={`skill-${skill.id}`}
                        name={`skill-${skill.id}`}
                        rows={3}
                        placeholder="Add more skills..."
                        className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={skill.value}
                        onChange={(e) => handleSkillsChange(skill.id, e.target.value)}
                      />
                    </div>
                    {skills.length > 1 && (
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="mt-2 rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                          onClick={() => handleDeleteSkillsClick(skill.id)}
                        >
                          Remove Skill
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
                      onClick={handleAddSkillsClick}
                    >
                      + Add Skills
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
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Second grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
          {/* Content for the second grid */}
        </div>
      </div>
    </div>
  );
}

