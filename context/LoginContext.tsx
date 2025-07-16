import React, { createContext, useState } from "react";

export interface IFormData {
  phone_number:string;
  password: string;
}

export interface ILoginContext {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  direction: number;
  setDirection: React.Dispatch<React.SetStateAction<number>>;
}
export interface LoginContextProps {
  children: React.ReactNode;
}
export const LoginContext = createContext<ILoginContext | undefined>(undefined);
const LoginContextProvider: React.FC<LoginContextProps> = ({ children }) => {
  const [formData, setFormData] = useState<IFormData>({
    phone_number: "",
    password: "",
  });
  const [direction, setDirection] = useState(0);
  return (
    <LoginContext.Provider
      value={{ formData, setFormData, direction, setDirection }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
