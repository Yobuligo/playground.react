import { useId, useState } from "react";
import { ILabeledInputProps } from "./ILabeledInputProps";

export const LabeledInput: React.FC<ILabeledInputProps> = (props) => {
  const [value, setValue] = useState(props.initialValue);
  const inputId = useId();

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onValueChange?.(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor={inputId}>{props.label}</label>
      </div>
      <div>
        <input
          id={inputId}
          type={props.type ?? "text"}
          value={value}
          onChange={onValueChange}
        />
      </div>
    </>
  );
};
