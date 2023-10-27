'use client'
import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode
} from "react";



type UserContextType = {
  isUser: boolean;
  setIsUser: (value: boolean) => void;
};

export const Context = createContext<UserContextType>({isUser: false, setIsUser: (value=false) => {}});


export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUser, setIsUser] = useState(false);

  return (
    <Context.Provider value={{ isUser, setIsUser }}>
      {children}
    </Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);
