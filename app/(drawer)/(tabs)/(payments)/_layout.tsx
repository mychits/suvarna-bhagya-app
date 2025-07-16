import { General } from "@/data/Data";
import { Stack } from "expo-router";
import React from "react";

const PaymentsLayout = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false, headerTitle: General.emptyText }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="filteredPayments" />
      <Stack.Screen name="paymentGroupInfo" />
    </Stack>
  );
};

export default PaymentsLayout;
