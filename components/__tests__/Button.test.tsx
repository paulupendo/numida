import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomButton from "../Button";

describe("CustomButton", () => {
  test("renders the button with the correct title", () => {
    const { getByText } = render(<CustomButton title='Submit' />);
    expect(getByText("Submit")).toBeTruthy();
  });

  test("displays a loader when loading is true", () => {
    const { getByTestId, queryByText } = render(<CustomButton title='Submit' loading={true} />);
    expect(getByTestId("activity-indicator")).toBeTruthy();
    expect(queryByText("Submit")).toBeNull();
  });

  test("does not display a loader when loading is false", () => {
    const { queryByTestId, getByText } = render(<CustomButton title='Submit' loading={false} />);
    expect(queryByTestId("activity-indicator")).toBeNull();
    expect(getByText("Submit")).toBeTruthy();
  });

  test("calls the onPress function when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CustomButton title='Submit' onPress={onPressMock} />);
    fireEvent.press(getByText("Submit"));
    expect(onPressMock).toHaveBeenCalled();
  });

  test("does not call the onPress function when loading", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<CustomButton title='Submit' onPress={onPressMock} loading={true} />);
    fireEvent.press(getByTestId("activity-indicator"));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
