import { gql } from "@apollo/client";

export const GENERATE_TEXT = gql`
  mutation Mutation($prompt: String) {
    generateText(prompt: $prompt) {
      data
    }
  }
`;

export const ADD_EXPERIENCE = gql`
  mutation addExperience(
    $StartingDate: String
    $EndDate: String
    $Company: String
    $Degree: String
    $Responsibilities: String
    $Role: String
  ) {
    addExperience(
      StartingDate: $StartingDate
      EndDate: $EndDate
      Company: $Company
      Degree: $Degree
      Responsibilities: $Responsibilities
      Role: $Role
    )
  }
`;
export const ADD_EDUCATION = gql`
  mutation addEducation(
    $University: String
    $Degree: String
    $StartingDate: String
    $EndDate: String
  ) {
    addEducation(
      University: $University
      Degree: $Degree
      CompanyName: $CompanyName
      StartingDate: $StartingDate
      EndDate: $EndDate
    )
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $Work: String
    $Role: String
    $Education: String
    $Skills: String
    $Password: String
    $First: String
    $Last: String
    $Email: String
    $DOB: String
    $Phone: String
    $City: String
    $State: String
    $Country: String
    $Github: String
    $Linkedin: String
  ) {
    addUser(
      Work: $Work
      Role: $Role
      Education: $Education
      Skills: $Skills
      Password: $Password
      First: $First
      Last: $Last
      Email: $Email
      DOB: $DOB
      Phone: $Phone
      City: $City
      State: $State
      Country: $Country
      Github: $Github
      Linkedin: $Linkedin
    ) {
      token
      user {
        _id

        First
        Last
        Email
      }
    }
  }
`;
