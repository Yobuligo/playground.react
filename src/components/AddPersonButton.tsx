import { useContext } from "react";
import { AppContext } from "../model/AppContext";

const AddPersonButton: React.FC = () => {
  const context = useContext(AppContext);
  const onAddPersonClick = () => {
    context.onAddPerson({ firstname: "Alex", lastname: "Ant" });
  };
  return <button onClick={onAddPersonClick}>Add Person</button>;
};

export default AddPersonButton;
