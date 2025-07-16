import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
export interface RegisterContextProps {
  children: React.ReactNode;
}
export interface IFormData {
  first_name:string;
  last_name:string;
  middle_name:string;
  full_name: string;
  phone_number: string;
  password: string;
}
export interface IRegisterContext {
  rFormData: IFormData;
  setRFormData: Dispatch<SetStateAction<IFormData>>;
  direction:number;
  setDirection:Dispatch<SetStateAction<number>>
}
export const RegisterContext = createContext<undefined | IRegisterContext>(undefined);
const RegisterContextProvider: React.FC<RegisterContextProps> = ({
  children,
}) => {
  const [rFormData, setRFormData] = useState<IFormData>({
    first_name:"",
    last_name:"",
    middle_name:"",
    full_name: "",
    phone_number: "",
    password: "",
  });
  const [direction,setDirection] = useState(0);
  return (
    <RegisterContext.Provider value={{ rFormData, setRFormData,direction,setDirection }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
