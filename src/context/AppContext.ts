import React from "react";
import { MutableValue } from "../components/ContextComponent/MutableValue";

export const AppContextData = {
  firstname: MutableValue<string>("Peter"),
  lastname: MutableValue<string>("Hoffmann"),
  age: MutableValue<number>(),
};

export const AppContext = React.createContext(AppContextData);
