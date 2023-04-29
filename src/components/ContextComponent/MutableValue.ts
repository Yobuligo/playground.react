import { Dispatch, SetStateAction } from "react";

export type MutableValueType<T> = [T | undefined, Dispatch<SetStateAction<T>>];

export const MutableValue = <T>(initialValue?: T): MutableValueType<T> => {
  return [initialValue, {} as any];
};
