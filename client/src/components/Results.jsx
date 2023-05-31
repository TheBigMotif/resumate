import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const Result = () => {
  // This is used for the ReactToPrint functionality
  let componentRef = useRef();

  const personalInfo = {
    name: `${first} ${last}`,
    professionalTitle: {role},
    email: {email},
    emailLink: `mailto: ${email}`,
    github: {github},
    website: "",
    description: "I'm an astronaut with experience in space missions and universe exploration.",
  };

  const educationInfo = {
    university: "",
    degree: {education},
  };

  const workExperience = [
    {
      companyName: "",
      jobTitle: {role},
      jobDescription: {generatedText},
    },

  ];

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <div className="py-20 lg:py-24 px-6 mx-auto max-w-7xl">
        {/* Personal Information Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold">Personal Information</h2>
          <p><span className="font-semibold">Name:</span> {personalInfo.name}</p>
          <p><span className="font-semibold">Professional Title:</span> {personalInfo.professionalTitle}</p>
          <p><span className="font-semibold">Email:</span> <a href={personalInfo.emailLink} target="_blank" rel="noreferrer">{personalInfo.email}</a></p>
          <p><span className="font-semibold">GitHub:</span> <a href={personalInfo.github} target="_blank" rel="noreferrer">{personalInfo.github}</a></p>
          {/* <p><span className="font-semibold">Description:</span> {personalInfo.description}</p> */}
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold">Education</h2>
          {/* <p><span className="font-semibold">University:</span> {educationInfo.university}</p> */}
          <p><span className="font-semibold">Degree:</span> {educationInfo.degree}</p>
        </div>

        {/* Work Experience Section */}
        <div>
          <h2 className="text-2xl font-bold">Work Experience</h2>
          {workExperience.map((experience, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-bold">{experience.companyName}</h3>
              <p className="text-md font-bold">{experience.jobTitle}</p>
              <p>{experience.jobDescription}</p>
            </div>
          ))}
        </div>

        {/* Print Button */}
        <div className="flex justify-end">
          <ReactToPrint
            trigger={() => 
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-50 rounded-lg px-8 py-3 shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-red-500 hover:to-yellow-500 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Print
              </button>
            }
            content={() => componentRef}
          />
          {/* TODO: ComponentToPrint needs to be changed into the name of the component we want to print */}
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        
        </div>
      </div>
    </main>
  );
};

export default Result;