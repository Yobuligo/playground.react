import { ISetting } from "./ISetting";

export interface IAppContext {
  firstname: ISetting<string>;
  lastname: ISetting<string>;
}
