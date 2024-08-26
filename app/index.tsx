import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// components
import { Container, Text, LoanCard, Button } from "@/components";
import { RootState } from "@/store/reducer";
import { AppDispatch } from "@/store/store";

// utils
import { sizes } from "@/utils/theme";
import { fetchLoans } from "@/store/loans.slice";
import { RootStackParamList } from "@/types/navigations.types";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { loans } = useSelector((state: RootState) => state.loans);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    dispatch(fetchLoans());
  }, [dispatch]);

  return (
    <Container safeArea={false} pt={sizes.xl} px={sizes.m}>
      <Text weight='bold' variant='xl' mb={sizes.l}>
        Loan Application Dashboard
      </Text>

      <FlatList
        data={loans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <LoanCard title={item.name} amount={item.maximumAmount} rate={item.interestRate} mt={sizes.l} hasBg />}
        ListEmptyComponent={<Text>No loan products available.</Text>}
        contentContainerStyle={{ paddingBottom: 150 }}
      />

      <Button title='Apply for a loan' onPress={() => navigation.navigate("applyLoan")} mt={sizes.xl} />
    </Container>
  );
}
