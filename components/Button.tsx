import React from "react";
import { Pressable, PressableProps, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

// utils
import { colors, sizes } from "@/utils/theme";
import { spacing, SpacingProps } from "@/utils/mixins/spacing";

// components
import Text from "@/components/Typography";

interface ButtonProps extends PressableProps, SpacingProps {
  title?: string;
  loading?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ title, loading, children, ...props }) => {
  return (
    <StyledButton {...props} disabled={loading}>
      {loading ? (
        <ActivityIndicator color={colors.white} testID='activity-indicator' />
      ) : (
        <Text color='white' variant='m' align='center' weight='bold' casing='uppercase' family='Inter'>
          {title}
        </Text>
      )}
    </StyledButton>
  );
};

const StyledButton = styled(Pressable)<ButtonProps>`
  background-color: ${colors.primary};
  color: ${colors.white};
  position: absolute;
  bottom: 20px;
  right: ${sizes.m}px;
  left: ${sizes.m}px;
  padding: ${sizes.m}px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  ${spacing};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export default CustomButton;
