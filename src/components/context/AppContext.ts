import React from "react";
import { initializeContext } from "./InitialContext";

export const AppContext = React.createContext(initializeContext());
