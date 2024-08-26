import React from "react";
import { render } from "@testing-library/react-native";
import Card from "../Card";
import { Text } from "react-native";

describe("Card", () => {
  test("renders the card with children", () => {
    const { getByText } = render(
      <Card>
        <Text>Card Content</Text>
      </Card>,
    );
    expect(getByText("Card Content")).toBeTruthy();
  });

  test("applies a custom background color", () => {
    const { getByTestId } = render(
      <Card bg='lightblue'>
        <Text>Card Content</Text>
      </Card>,
    );
    const card = getByTestId("card");
    expect(card.props.style.backgroundColor).toBe("lightblue");
  });

  test("applies spacing props correctly", () => {
    const { getByTestId } = render(
      <Card mt={16} mb={16} ml={8} mr={8}>
        <Text>Card Content</Text>
      </Card>,
    );
    const card = getByTestId("card");
    const cardStyles = card.props.style;

    expect(cardStyles).toEqual(expect.objectContaining({ marginTop: 16, marginBottom: 16, marginLeft: 8, marginRight: 8 }));
  });
});
