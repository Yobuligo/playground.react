/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction, useState } from "react";

export const useMapContextData = (contextData: any) => {
  const newContextData: any = {};
  for (const propName in contextData) {
    const prop: [any | undefined, Dispatch<SetStateAction<any>>] =
      contextData[propName];
    if (prop[0]) {
      newContextData[propName] = useState(prop[0]);
    } else {
      newContextData[propName] = useState();
    }
  }
  return newContextData;
};
