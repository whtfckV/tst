import { Dispatch, SetStateAction, createContext } from "react";

export const MenuContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([true, () => { }])