import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

// utils
import { colors } from "@/utils/theme";
import { spacing, SpacingProps } from "@/utils/mixins/spacing";

interface ContainerProps extends SpacingProps {
  children: ReactNode;
  safeArea?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, safeArea = true, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

const StyledContainer = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${colors.white};
  ${({ safeArea }) => safeArea && "padding-top: env(safe-area-inset-top);"};
  ${spacing}
`;

export default Container;
