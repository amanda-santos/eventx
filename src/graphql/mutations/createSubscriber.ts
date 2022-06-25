import { gql } from "@apollo/client";

export type CreateSubscriberVariables = {
  name: string;
  email: string;
};

export type CreateSubscriberResult = {
  createSubscriber: {
    id: string;
    name: string;
    email: string;
  };
};

export const CREATE_SUBSCRIBER = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;
