import { DataObject } from "../ORM";
import { IPerson } from "./IPerson";

export class Person extends DataObject implements IPerson {
  firstname: string = "";
  lastname: string = "";
}
