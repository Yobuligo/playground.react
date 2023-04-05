import { ReactNode, useEffect, useState } from "react";
import NewRow from "./components/NewRow";
import { State } from "./model/State";
import { AppContext } from "./store/AppContext";

const App: React.FC = () => {
  const x = 5;
  const y = 5;
  const [fields, setFields] = useState<State[][]>([]);
  const [rowItems, setRowItems] = useState<ReactNode>();

  useEffect(() => {
    setFields(() => {
      const rows: State[][] = [];
      for (let i = 0; i < y; i++) {
        const fields: State[] = [];
        for (let j = 0; j < x; j++) {
          fields.push(State.Empty);
        }
        rows.push(fields);
      }
      return rows;
    });
  }, [x, y]);

  const [mode, setMode] = useState(false);
  const toggleMode = () => {
    setMode((previous) => !previous);
  };

  useEffect(() => {
    setRowItems(() => {
      if (fields.length === 0) {
        return <></>;
      }
      let rows: ReactNode[] = [];
      for (let i = 0; i < y; i++) {
        const rowFields: State[] = [];
        for (let j = 0; j < x; j++) {
          rowFields.push(fields[j][i]);
        }
        rows.push(<NewRow states={rowFields} />);
      }
      return rows;
    });
  }, [fields]);

  return (
    <AppContext.Provider value={{ mode: mode, toggleMode: toggleMode }}>
      {rowItems}
    </AppContext.Provider>
  );
};

export default App;
