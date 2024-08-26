import React from "react";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

// components
import Card from "./Card";
import Text from "./Typography";
import Pill from "./Pill";
import { ExternalLink } from "./ExternalLink";

// utils
import { sizes, colors } from "@/utils/theme";
import { formatCurrencyUSD } from "@/utils/currency-formater";
import { SpacingProps } from "@/utils/mixins/spacing";

interface LoanCardProps extends SpacingProps {
  title: string;
  amount: number;
  rate: number;
  hasBg?: boolean;
}

const LoanCard: React.FC<LoanCardProps> = ({ title, amount = 0, rate = 0, hasBg = false, ...props }) => {
  return (
    <Card padding={sizes.m} bg={hasBg ? colors.teal : colors.white} {...props}>
      <Text weight='bold' variant='l' mb={sizes.l}>
        {title}
      </Text>
      <Text family='Inter'>Maximum Amount:</Text>
      <Text weight='bold' variant='xl' color='primary' family='Inter'>
        {formatCurrencyUSD(amount)}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text weight='bold'>Interest: {rate}%</Text>
        <Pill style={{ marginLeft: "auto" }}>
          <ExternalLink href='https://numida.com/' style={{ marginRight: 10 }}>
            <Text color='primary'>Learn more</Text>
          </ExternalLink>
          <AntDesign name='arrowright' size={15} color={colors.primary} testID='arrow-icon' />
        </Pill>
      </View>
    </Card>
  );
};

export default LoanCard;
