const { gql } = require("apollo-server-express");
// ! until app is running use "!"
// type Query {
//     generatetext(prompt: String): TextResult
//   }
//error: String
//success: Boolean
const typeDefs = gql`
  type TextResult {
    data: String
  }

  input TextInput {
    data: String
  }

  type User {
    _id: ID
    Work: String
    Role: String
    Education: String
    Skills: String
    Password: String
    First: String
    Last: String
    Email: String
    DOB: String
    Phone: String
    City: String
    State: String
    Country: String
    Github: String
    Linkedin: String
    responses: [Response]
  }
  type Response {
    TechnicalSkills: [String]
    Experience: [Experience]
    Education: [Education]
    Skills: [Skills]
    Interest: [Interest]
  }
  type Experience {
    experienceId: ID
    Company: String
    Degree: String
    StartingDate: String
    Role: String
    Responsibilities: String
    EndDate: String
  }
  type Education {
    educationId: ID
    University: String
    Degree: String
    StartingDate: String
    EndDate: String
  }
  type Skills {
    skillId: ID
    SoftSkills: [String]
    HardSkills: [String]
  }
  type Interest {
    interestId: ID
    Interest: [String]
  }
  input UserInput {
    _id: ID
    Work: String
    Role: String
    Education: String
    Skills: String
    First: String
    Last: String
    Email: String
    DOB: String
    Phone: String
    City: String
    State: String
    Country: String
    Github: String
    Linkedin: String
    responses: [ResponseInput]
  }
  input ResponseInput {
    technicalSkills: [String]
    experience: [ExperienceInput]
    education: [EducationInput]
    skills: [SkillsInput]
    interest: [InterestInput]
  }
  input ExperienceInput {
    ExperienceId: ID
    Company: String
    Degree: String
    StartingDate: String
    Role: String
    Responsibilities: String
    EndDate: String
  }
  input EducationInput {
    educationId: ID
    University: String
    Degree: String
    StartingDate: String
    EndDate: String
  }
  input SkillsInput {
    skillId: ID
    SoftSkills: [String]
    HardSkills: [String]
  }
  input InterestInput {
    skillId: ID
    interestId: ID
    Interest: [String]
  }
  type Auth {
    token: ID
    user: User
  }

  # Controllers (only for GETs)
  type Query {
    user: User
  }
  type Mutation {
    addUser(
      Password: String
      Work: String
      Role: String
      Education: String
      Skills: String
      First: String
      Last: String
      Email: String
      DOB: String
      Phone: String
      City: String
      State: String
      Country: String
      Github: String
      Linkedin: String
    ): Auth
    login(email: String, password: String): Auth
    addData(userData: UserInput): User
    addResponse(responseData: ResponseInput): User
    addExperience(experienceData: ExperienceInput): User
    addEducation(educationeData: EducationInput): User
    addSkills(skillsData: SkillsInput): User
    addInterest(interestData: InterestInput): User
    generateText(prompt: String): TextResult
  }
`;

module.exports = typeDefs;

// users: [User] #for all users
