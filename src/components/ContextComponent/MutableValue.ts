import { Dispatch, SetStateAction } from "react";

export const MutableValue = <T>(
  initialValue?: T
): [T | undefined, Dispatch<SetStateAction<T>>] => {
  return [initialValue, {} as any];
};
