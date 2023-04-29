/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export const useMapContextData = (contextData: any) => {
  const newContextData: any = {};
  for (const propName in contextData) {
    const prop = contextData[propName];

    if (Array.isArray(prop)) {
      if (prop.length === 2) {
        if (prop[0] !== undefined) {
          newContextData[propName] = useState(prop[0]);
        } else {
          newContextData[propName] = useState();
        }
      } else {
        newContextData[propName] = prop;
      }
    } else {
      newContextData[propName] = prop;
    }
  }
  return newContextData;
};
