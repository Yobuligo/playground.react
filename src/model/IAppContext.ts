import { IPerson } from "./IPerson";

export interface IAppContext {
  persons: IPerson[];
  selectedPerson: IPerson;
  onAddPerson: (person: IPerson) => void;
  onUpdatePerson: (person: IPerson) => void;
}
