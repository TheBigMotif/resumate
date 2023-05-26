const { gql } = require("apollo-server-express");
// ! until app is running use "!"
const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    first: String
    Last: String
    email: String
    DOB: String
    Phone: String
    City: String
    State: String
    Country: String
    github: String
    Linkedin: String
    responses: [Response]
  }
  type Response {
    technicalSkills: [String]
    experience: [Experience]
    education: [Education]
    skills: [Skills]
    interest: [Interest]
  }
  type Experience {
    experienceId: ID
    company: String
    degree: String
    year: Int
  }
  type Education {
    educationId: ID
    university: String
    degree: String
    year: Int
    CompanyName: String
    StartingDate: String
    EndDate: String
    DegreeTitle: String
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
    userName: String
    first: String
    Last: String
    email: String
    DOB: String
    Phone: String
    City: String
    State: String
    Country: String
    github: String
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
    experienceId: ID
    company: String
    degree: String
    year: Int
  }
  input EducationInput {
    educationId: ID
    university: String
    degree: String
    year: Int
    CompanyName: String
    StartingDate: String
    EndDate: String
    DegreeTitle: String
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
      userName: String
      first: String
      Last: String
      email: String
      DOB: String
      Phone: String
      City: String
      State: String
      Country: String
      github: String
      Linkedin: String
    ): Auth
    login(email: String, password: String): Auth
    addResponse(responseData: ResponseInput): User
    addExperience(experienceData: ExperienceInput): User
    addEducation(educationeData: EducationInput): User
    addSkills(skillsData: SkillsInput): User
    addInterest(interestData: InterestInput): User
  }
`;

module.exports = typeDefs;

// users: [User] #for all users
