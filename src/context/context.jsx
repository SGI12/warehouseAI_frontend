'use client'
import UserStore from "@/store/userStore";
import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode
} from "react";





export const Context = createContext();


export const AuthContextProvider = ({ children }) => {
  
  
  return (
    <Context.Provider value={{ user: new UserStore }}>
      {children}
    </Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);
