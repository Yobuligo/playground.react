import { ReactNode } from "react";
import { useMapContextData } from "./useMapContextData";

/**
 * Requirements:
 * - Value Binding -> useState
 * - Simple Value -> e.g. a stopwatch, which must be available everywhere, like a singleton
 * - Event Binding -> Calling a callback, when a value was changed? Actually also possible with Value Binding and useEffect
 * - Generic Reducer (Which supports all types) with Binding, so that it can have useStates
 */
const ContextComponent: React.FC<{
  context: React.Context<any>;
  contextData: any;
  children: ReactNode;
}> = (props) => (
  <props.context.Provider value={useMapContextData(props.contextData)}>
    {props.children}
  </props.context.Provider>
);

export default ContextComponent;
