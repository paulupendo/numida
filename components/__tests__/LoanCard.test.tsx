import React from "react";
import { render } from "@testing-library/react-native";
import LoanCard from "../LoanCard";
import { colors } from "@/utils/theme";
import { formatCurrencyUSD } from "@/utils/currency-formater";

describe("LoanCard Component", () => {
  test("renders the title, amount, and interest rate correctly", () => {
    const { getByText } = render(<LoanCard title='Personal Loan' amount={5000} rate={5} />);

    expect(getByText("Personal Loan")).toBeTruthy();
    expect(getByText("Maximum Amount:")).toBeTruthy();
    expect(getByText(formatCurrencyUSD(5000))).toBeTruthy();
    expect(getByText("Interest: 5%")).toBeTruthy();
  });

  test("applies the background color when hasBg is true", () => {
    const { getByTestId } = render(<LoanCard title='Personal Loan' amount={5000} rate={5} hasBg />);

    const card = getByTestId("card");
    expect(card.props.style).toEqual(expect.objectContaining({ backgroundColor: colors.teal }));
  });

  test("applies the default background color when hasBg is false", () => {
    const { getByTestId } = render(<LoanCard title='Personal Loan' amount={5000} rate={5} hasBg={false} />);

    const card = getByTestId("card");
    expect(card.props.style).toEqual(expect.objectContaining({ backgroundColor: colors.white }));
  });

  test("renders the ExternalLink and AntDesign icon correctly", () => {
    const { getByText, getByTestId } = render(<LoanCard title='Personal Loan' amount={5000} rate={5} />);

    expect(getByText("Learn more")).toBeTruthy();
    expect(getByTestId("arrow-icon")).toBeTruthy();
  });
});
