import { createContext } from "react";
import { IAppContext } from "./IAppContext";

export const AppContextDefault: IAppContext = {
  firstname: { value: "", dispatcher(value) {} },
  lastname: { value: "", dispatcher(value) {} },
};

export const AppContext = createContext<IAppContext>(AppContextDefault);
