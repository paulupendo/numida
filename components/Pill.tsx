import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import styled from "styled-components/native";

// utils
import { colors } from "@/utils/theme";

interface PillProps extends ViewProps {
  children: ReactNode;
}

const Pill: React.FC<PillProps> = ({ children, ...props }) => <StyledPill {...props}>{children}</StyledPill>;

const StyledPill = styled(View)`
  border-radius: 50%;
  border-width: 1px;
  border-color: ${colors.primary};
  padding-horizontal: 16px;
  padding-vertical: 4px;
  flex-direction: row;
  align-items: center;
`;

export default Pill;
