import { IDataObject } from "./../ORM";

export interface IPerson extends IDataObject {
  firstname: string;
  lastname: string;
}
