import { gql } from "@apollo/client";

export const GET_LOAN_PRODUCTS = gql`
  query GetLoanProducts {
    loanProducts {
      id
      name
      interestRate
      maximumAmount
    }
  }
`;
