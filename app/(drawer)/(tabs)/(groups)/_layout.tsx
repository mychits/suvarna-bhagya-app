import { Stack } from "expo-router";
import React from "react";

const GroupsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="saving" />
      <Stack.Screen name="enrollForm" />
      <Stack.Screen name="knowmore" />
    </Stack>
  );
};

export default GroupsLayout;
