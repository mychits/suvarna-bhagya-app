import React from "react";
import LoginContextProvider from "./LoginContext";
import RegisterContextProvider from "./RegisterContext";
import UserContextProvider from "./UserContext";
interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  return (
    <UserContextProvider>
      <LoginContextProvider>
        <RegisterContextProvider>{children}</RegisterContextProvider>
      </LoginContextProvider>
    </UserContextProvider>
  );
};

export default GlobalContextProvider;
