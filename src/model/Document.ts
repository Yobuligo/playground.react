import { DocumentState } from "./DocumentState";
import { State } from "./State";

export class Document {
  state = new State();

  constructor() {
    this.state.onValueChange((newValue) =>
      console.log(`Document State Changed to '${DocumentState[newValue]}'`)
    );
  }
}
