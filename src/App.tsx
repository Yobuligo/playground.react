import { useState } from "react";
import Row from "./components/Row";
import { State } from "./model/State";

const App: React.FC = () => {
  const [field, setField] = useState<State[][]>([]);

  const rules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 4],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [mode, setMode] = useState(false);
  const onActivate = () => {
    setMode((previous) => !previous);
  };
  return (
    <>
      <Row mode={mode} onActivate={onActivate} />
      <Row mode={mode} onActivate={onActivate} />
      <Row mode={mode} onActivate={onActivate} />
    </>
  );
};

export default App;
