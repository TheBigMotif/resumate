import resumeData from "../data/dataResume.js";


const Resume = () => {
  const { name, title, contact, experience, profile, skills, education } =
    resumeData;

  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="py-20 lg:py-24 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-4">{name}</h1>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <a
                className="ml-3 font-semibold text-sm"
                href={`mailto:${contact.email}`}
                target="_blank"
                rel="noreferrer"
              >
                {contact.email}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 shrink-0 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <a
                className="ml-3 font-semibold text-sm"
                href={contact.github}
                target="_blank"
                rel="noreferrer"
              >
                {contact.github}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 shrink-0 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>
              <a
                className="ml-3 font-semibold text-sm"
                href={contact.website}
                target="_blank"
                rel="noreferrer"
              >
                {contact.website}
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="absolute top-[-3rem] lg:top-[-3.5rem] -left-12 w-40 lg:w-[13rem] h-40 lg:h-[13rem] bg-teal-400 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-12 lg:mt-24">
          <div className="lg:w-3/4">
            <h3 className="text-xl font-bold">Work Experience</h3>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 mt-4">
              {experience.map((exp) => (
                <div key={exp.company}>
                  <h4 className="text-xl font-bold mb-1 lg:mb-4">
                    {exp.company}
                  </h4>
                  <h4 className="text-xl font-bold mb-4">{exp.title}</h4>
                  <p className="text-sm">{exp.date}</p>
                  <p>{exp.description}</p>
                  <ul>
                    {exp.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4">
            <h3 className="text-xl font-bold">Profile</h3>
            <p>{profile}</p>
            <h3 className="mt-12 lg:mt-16 text-xl font-bold">Skills</h3>
            <h4>Programming Languages</h4>
            <ul>
              {skills.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <h4 className="mt-8 lg:mt-16 text-xl font-bold">
              Libraries &amp; Frameworks
            </h4>
            <ul>
              {skills.frameworks.map((framework) => (
                <li key={framework}>{framework}</li>
              ))}
            </ul>
            <h3 className="mt-12 lg:mt-16 text-xl font-bold">Education</h3>
            <h4 className="mb-1">{education.university}</h4>
            <p className="mb-1">{education.degree}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
