import { useMemo, useState } from "react";
import Button from "./components/Button";
import { Document } from "./model/Document";
import { DocumentState } from "./model/DocumentState";

const App: React.FC = () => {
  const document = useMemo(() => new Document(), []);
  const [state, setState] = useState(document.state.value);

  const onStateChange = (newValue: DocumentState) => {
    document.state.value = newValue;
    setState(newValue);
  };

  return (
    <>
      <Button
        documentState={DocumentState.Open}
        state={state}
        onStateChange={onStateChange}
      />
      <Button
        documentState={DocumentState.InProgress}
        state={state}
        onStateChange={onStateChange}
      />
      <Button
        documentState={DocumentState.Closed}
        state={state}
        onStateChange={onStateChange}
      />
    </>
  );
};

export default App;
