import { createContext } from "react";
import { IAppContext } from "./IAppContext";

export const AppContext = createContext<IAppContext>({
  persons: [],
  selectedPerson: { firstname: "Stacey", lastname: "Starfish" },
  onAddPerson: () => {},
  onUpdatePerson: () => {},
});
