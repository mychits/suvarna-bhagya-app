import GlobalContextProvider from "@/context/GlobalContextProvider";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <GlobalContextProvider>   
       <Stack
    screenOptions={{
      headerShown:false
      }}
      >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, statusBarHidden: true }}
      />
      <Stack.Screen name="(auth)" options={{ headerTransparent: true }} />
      <Stack.Screen name="(tabs)"  />
    </Stack>
    </GlobalContextProvider>

  );
};

export default RootLayout;
