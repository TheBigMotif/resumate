import { gql } from "@apollo/client";

// TODO: is an example, information needs to be changed
export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

// TODO: is an example, information needs to be changed
export const GENERATE_TEXT = gql`
  mutation Mutation($prompt: String) {
    generateText(prompt: $prompt) {
      data
    }
  }
`;
export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
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
