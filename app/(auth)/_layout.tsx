import AppBarIcon from "@/components/appIcons/AppBarIcon";
import { General } from "@/data/Data";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        title: General.emptyText,
        
        header(props) {
          return (
            <SafeAreaView>
              <AppBarIcon />
            </SafeAreaView>
          );
        },

        headerStyle: {
          backgroundColor: "pink",
        },
        headerLeft: () => {
          return <AppBarIcon />;
        },
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
};

export default AuthLayout;
