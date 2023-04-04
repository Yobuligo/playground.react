import { useState } from "react";
import { State } from "../model/State";
import Field from "./Field";

const Row: React.FC<{ mode: boolean; onActivate: () => void }> = (props) => {
  const [field1, setField1] = useState(State.Empty);
  const [field2, setField2] = useState(State.Empty);
  const [field3, setField3] = useState(State.Empty);

  const onActivate = (func: (state: State) => void) => {
    func(props.mode ? State.X : State.O);
    props.onActivate();
  };

  return (
    <div>
      <Field state={field1} onActivate={() => onActivate(setField1)} />
      <Field state={field2} onActivate={() => onActivate(setField2)} />
      <Field state={field3} onActivate={() => onActivate(setField3)} />
    </div>
  );
};

export default Row;
