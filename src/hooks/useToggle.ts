import { useState } from "react";

export const useToggle = (
  initialValue: boolean
): [value: boolean, toggle: () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((previous) => !previous);
  };

  return [value, toggle];
};
