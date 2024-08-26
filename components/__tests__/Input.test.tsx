import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Input from "../Input";

describe("Input Component", () => {
  test("renders the label correctly", () => {
    const { getByText } = render(<Input label='Username' />);
    expect(getByText("Username")).toBeTruthy();
  });

  test("renders the asterisk if required", () => {
    const { getByText } = render(<Input label='Password' required />);
    expect(getByText("*")).toBeTruthy();
  });

  test("does not render the asterisk if not required", () => {
    const { queryByText } = render(<Input label='Email' />);
    expect(queryByText("*")).toBeNull();
  });

  test("renders the error message when provided", () => {
    const { getByText } = render(<Input label='Username' error='Username is required' />);
    expect(getByText("Username is required")).toBeTruthy();
  });

  test("does not render the error message when not provided", () => {
    const { queryByText } = render(<Input label='Username' />);
    expect(queryByText("Username is required")).toBeNull();
  });

  test("handles text input correctly", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(<Input label='Username' placeholder='Enter your username' onChangeText={onChangeTextMock} />);

    fireEvent.changeText(getByPlaceholderText("Enter your username"), "testuser");
    expect(onChangeTextMock).toHaveBeenCalledWith("testuser");
  });
});
