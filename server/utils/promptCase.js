const promptCase = (data) => {
  switch (prompt) {
    case "WORK":
      return `I am writing a resume, my details are \n name: ${data.fullName} \n role: ${data.currentPosition} (${currentLength} years). \n I write in the technolegies: ${data.jobDescription}. Can you write a 100 words description for the top of the resume(first person writing)?`;
    case "SKILLS":
      return `I am writing a resume, my details are \n name: ${data.fullName} \n role: ${data.currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write a 100 words description for the top of the resume(first person writing)?`;
  }
};
module.exports = promptCase;
