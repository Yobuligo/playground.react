import { DocumentState } from "./DocumentState";
import { DocumentStateValueChangeHandler } from "./Types";

export class State {
  private _value: DocumentState = DocumentState.Open;
  private handlers: DocumentStateValueChangeHandler[] = [];

  get value(): DocumentState {
    return this._value;
  }

  set value(value: DocumentState) {
    this._value = value;
    this.handlers.forEach((handler) => handler(this._value));
  }

  onValueChange(handler: DocumentStateValueChangeHandler) {
    this.handlers.push(handler);
  }
}
