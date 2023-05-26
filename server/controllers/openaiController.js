require("dotenv").config(); // This is your .env file, where you store your API key
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}); // This is your API key, this is how you authenticate with OpenAI. This is stored in your .env file

const openai = new OpenAIApi(configuration); // This is a new instance

// `Craft clear messages to captivate a hiring manager. Highlight your unique selling point, drive action with a compelling call to action, and communicate benefits in a distinct tone of voice, use less than 35 words.

// Write a description in first person of a person that has this skillset: , his name is , use the following format: Hi! I am a  $ developer, my name is .`,

const generateText = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 300,
      temperature: 1,
    });
    const textAnswer = response.data.choices[0].text;

    res.status(200).json({
      success: true,
      data: textAnswer,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      success: false,
      error: "There was an error generating the text.",
    });
  }
};

module.exports = { generateText };
