import { HTMLInputTypeAttribute } from "react";

export interface ILabeledInputProps {
  initialValue?: string;
  label: string;
  onValueChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute
}
