import React from "react";
import { Text, TextProps } from "react-native";
import styled from "styled-components/native";

// utils
import { fontSizes, colors } from "@/utils/theme";
import { spacing, SpacingProps } from "@/utils/mixins/spacing";

type VariantType = keyof typeof fontSizes;
type ColorType = keyof typeof colors;

interface TypographyProps extends TextProps, SpacingProps {
  variant?: VariantType;
  color?: ColorType;
  align?: "left" | "center" | "right";
  weight?: "normal" | "bold";
  casing?: "uppercase" | "lowercase" | "capitalize";
  family?: string;
}

const defaultProps: TypographyProps = {
  variant: "sm",
};
const Typography: React.FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <StyledText {...defaultProps} {...props}>
      {children}
    </StyledText>
  );
};

const StyledText = styled(Text)<TypographyProps>`
  font-family: ${({ family, weight }) => {
    if (weight && !family) {
      return "RobotoBold";
    } else if (family) {
      return family;
    } else {
      return "Roboto";
    }
  }};
  font-weight: ${({ weight }) => (weight === "bold" ? "bold" : "normal")};
  font-size: ${({ variant }) => variant && fontSizes[variant]};
  color: ${({ color }) => color && colors[color]};
  text-align: ${({ align }) => align};
  text-transform: ${({ casing }) => casing};
  ${spacing};
`;

export default Typography;
