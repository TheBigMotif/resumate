const { User, Response } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { generatetext } = require("../controllers/openaiController");
const resolvers = {
  // Query: {
  //   generateText: async (_, { prompt }) => {
  //     try {
  //       const result = await generatetext(prompt);
  //       return result;
  //     } catch (error) {
  //       throw new Error("Failed to generate text");
  //     }
  //   },
  // },

  Query: {
    user: async (context) => {
      try {
        const users = await User.findOne({ _id: context.user._id });
        return users;
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // ! maybe not usable at the moment might leave like this
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    generateText: async (_, { prompt }) => {
      try {
        const result = await generatetext({ prompt });
        console.log(result);
        return result;
      } catch (error) {
        throw new Error("Failed to generate text");
      }
    },
    addResponse: async (parent, { responseData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { responses: responseData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addExperience: async (parent, { experienceData }, context) => {
      if (context.user) {
        const updatedUser = await Response.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { responses: experienceData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addEducation: async (parent, { educationData }, context) => {
      if (context.user) {
        const updatedUser = await Response.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { responses: educationData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addExperience: async (parent, { experienceData }, context) => {
      if (context.user) {
        const updatedUser = await Response.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { responses: experienceData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addSkills: async (parent, { skillsData }, context) => {
      if (context.user) {
        const updatedUser = await Response.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { responses: skillsData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addInterest: async (parent, { interestData }, context) => {
      if (context.user) {
        const updatedUser = await Response.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { responses: interestData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
