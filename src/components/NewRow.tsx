import { useContext } from "react";
import { State } from "../model/State";
import { AppContext } from "../store/AppContext";
import Field from "./Field";

const NewRow: React.FC<{ states: State[] }> = (props) => {
  const context = useContext(AppContext);
  const items = props.states.map((state) => {
    return (
      <Field
        state={state}
        onActivate={() => {
          state = context.mode ? State.X : State.O;
          context.toggleMode();
        }}
      />
    );
  });
  return <div>{items}</div>;
};

export default NewRow;
