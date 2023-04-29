import React from "react";
import { MutableValue } from "../components/ContextComponent/MutableValue";
import { Stopwatch } from "../services/Stopwatch";
import { Gender } from "./Gender";

export const AppContextData = {
  firstname: MutableValue<string>(""),
  lastname: MutableValue<string>("Hoffmann"),
  age: MutableValue<number>(),
  stopwatch: new Stopwatch(),
  gender: MutableValue<Gender>(Gender.Male),
};

export const AppContext = React.createContext(AppContextData);
