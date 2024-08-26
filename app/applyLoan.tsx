import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// components
import { Container, Text, Button, Input } from "@/components";

// utils
import { sizes } from "@/utils/theme";
import { validateField } from "@/utils/validation";
import { applyLoan } from "@/store/loans.slice";
import { AppDispatch } from "@/store/store";
import { RootState } from "@/store/reducer";

export default function ApplyLoan() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const dispatch = useDispatch<AppDispatch>();
  const { success, loading } = useSelector((state: RootState) => state.loans);

  const handleChangeText = (name: string, value: string) => {
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "amount":
        setAmount(value);
        break;
      case "purpose":
        setPurpose(value);
        break;
    }

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = () => {
    const validationErrors = {
      fullName: validateField("fullName", fullName),
      email: validateField("email", email),
      amount: validateField("amount", amount),
      purpose: validateField("purpose", purpose),
    };
    setErrors(validationErrors);

    const isValid = Object.values(validationErrors).every((error) => !error);

    if (isValid) {
      dispatch(applyLoan({ fullName, email, amount: Number(amount), purpose }));
    }
  };

  useEffect(() => {
    if (success.applyLoan) {
      Alert.alert("Loan Application Submitted Successfully", `Full Name: ${fullName}\nEmail: ${email}\nAmount: ${amount}\nPurpose: ${purpose}`, [
        {
          text: "OK",
          onPress: () => {
            setFullName("");
            setEmail("");
            setAmount("");
            setPurpose("");
          },
        },
      ]);
    }
  }, [success.applyLoan]);

  return (
    <Container safeArea={false} pt={sizes.xl} px={sizes.m}>
      <Text weight='bold' variant='xl' mb={sizes.xl}>
        Apply for a Loan
      </Text>

      <Input label='Full Name' placeholder='Full Name' value={fullName} onChangeText={(text) => handleChangeText("fullName", text)} error={errors.fullName} required />
      <Input
        label='Email'
        placeholder='yourname@example.com'
        value={email}
        onChangeText={(text) => handleChangeText("email", text)}
        keyboardType='email-address'
        error={errors.email}
        required
      />
      <Input label='Loan Amount' placeholder='UGX' value={amount} onChangeText={(text) => handleChangeText("amount", text)} keyboardType='numeric' error={errors.amount} required />
      <Input label='Loan Purpose' placeholder='car purchase' value={purpose} onChangeText={(text) => handleChangeText("purpose", text)} error={errors.purpose} required />

      <Button title='Apply' onPress={handleSubmit} mt={sizes.xl} loading={loading} />
    </Container>
  );
}
