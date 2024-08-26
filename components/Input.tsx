import React from "react";
import { View, TextInput, TextInputProps, Text } from "react-native";
import styled from "styled-components/native";

import { colors } from "@/utils/theme";

interface InputBoxProps extends TextInputProps {
  label: string;
  error?: string;
  required?: boolean;
}

const Input: React.FC<InputBoxProps> = ({ label, error, required, ...props }) => {
  return (
    <Container>
      <Label>
        {label}
        {required && <Asterisk>*</Asterisk>}
      </Label>
      <StyledInput {...props} />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};

const Container = styled(View)`
  margin-bottom: 16px;
`;

const Label = styled(Text)`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Asterisk = styled(Text)`
  color: red;
`;

const StyledInput = styled(TextInput)`
  border-width: 1px;
  border-color: ${colors.gray};
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${colors.white};
`;

const ErrorText = styled(Text)`
  color: red;
  margin-top: 4px;
  font-size: 14px;
`;

export default Input;
