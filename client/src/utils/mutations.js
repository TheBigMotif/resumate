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
