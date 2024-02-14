import { createContext } from "react";
import { TAppContext } from "../types";

export const AppContext = createContext<TAppContext>({
    theme: 'dark',
})
