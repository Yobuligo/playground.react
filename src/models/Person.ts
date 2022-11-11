import { DataObject } from "../DataRequest/DataObject";

export class Person extends DataObject {
  firstname: string = "";
  lastname: string = "";

  constructor() {
    super("persons");
  }
}
