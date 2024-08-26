import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GET_LOAN_PRODUCTS } from "@/api/loanProducts";
import client from "@/utils/graphql/apollo-client";
import { AppThunk } from "./store";
import submitLoan from "@/api/applyLoan";

interface Loan {
  id: string;
  name: string;
  maximumAmount: number;
  interestRate: number;
}

interface LoansState {
  loading: boolean;
  loans: Loan[];
  error: string | null;
  success: {
    applyLoan: boolean;
  };
}

interface LoanData {
  fullName: string;
  email: string;
  amount: number;
  purpose: string;
}

const initialState: LoansState = {
  loading: false,
  loans: [],
  error: null,
  success: {
    applyLoan: false,
  },
};

const loansSlice = createSlice({
  name: "loans",
  initialState: initialState,
  reducers: {
    applyLoanStart: (state) => {
      state.loading = true;
      state.success.applyLoan = false;
    },
    applyLoanSuccess: (state) => {
      state.loading = false;
      state.success.applyLoan = true;
    },
    applyLoanFailure: (state) => {
      state.loading = false;
      state.error = "Failed to apply for loan";
    },
    fetchLoansStart: (state) => {
      state.loading = true;
    },
    fetchLoansSuccess: (state, action: PayloadAction<Loan[]>) => {
      state.loading = false;
      state.loans = action.payload;
    },
    fetchLoansFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { applyLoanStart, applyLoanFailure, applyLoanSuccess, fetchLoansStart, fetchLoansSuccess, fetchLoansFailure } = loansSlice.actions;

export const applyLoan =
  (loanData: LoanData): AppThunk =>
  async (dispatch) => {
    dispatch(applyLoanStart());
    try {
      await submitLoan(loanData);
      dispatch(applyLoanSuccess());
    } catch (error) {
      dispatch(applyLoanFailure());
    }
  };

export const fetchLoans = (): AppThunk => async (dispatch) => {
  dispatch(fetchLoansStart());
  try {
    const { data } = await client.query({ query: GET_LOAN_PRODUCTS });
    dispatch(fetchLoansSuccess(data.loanProducts));
  } catch (error) {
    dispatch(fetchLoansFailure());
  }
};

export default loansSlice.reducer;
