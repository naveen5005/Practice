import { createContext } from "react";

const MyContext = createContext();

export const MyContextProvider = MyContext.Provider;
export const MyContextConsumer = MyContext.Consumer;