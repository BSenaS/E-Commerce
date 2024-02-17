import { createContext, useContext } from "react";
// * -> data içerisindeki tüm objeleri çek
import * as data from "../data";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
