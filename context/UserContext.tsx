import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
interface UserContextProps {
  children: React.ReactNode;
}

export interface IUserContext {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}
export const UserContext = createContext<undefined | IUserContext>(undefined);
const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
