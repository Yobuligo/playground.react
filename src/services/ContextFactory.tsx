import { ReactNode, createContext, useState } from "react";

type Store<T> = [state: T, setState: (newState: T) => void];

export function ContextFactory<T>(initialState: T) {
  const useStore = (): Store<T> => {
    const [state, setState] = useState<T>(initialState);
    return [state, setState];
  };

  const Context = createContext(initialState);

  const Provider: React.FC<{ children: ReactNode }> = (props) => {
    return (
      <Context.Provider value={initialState}>{props.children}</Context.Provider>
    );
  };

  return { Provider, useStore };
}
