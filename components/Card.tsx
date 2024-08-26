import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// utils
import { colors } from "@/utils/theme";
import { spacing, SpacingProps } from "@/utils/mixins/spacing";

interface CardProps extends SpacingProps {
  children: ReactNode;
  bg?: string;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <StyledCard {...props} testID='card'>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled(View)<CardProps>`
  background-color: ${({ bg }) => bg ?? colors.white};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.gray};
  shadow-color: ${colors.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.15;
  shadow-radius: 2px;
  elevation: 5;
  ${spacing};
`;

export default Card;
