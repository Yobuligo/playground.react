import { useContext } from "react";
import { ITodo } from "../model/ITodo";
import { AppContext } from "./context/AppContext";
import styles from "./Todo.module.css";

const Todo: React.FC<{ todo: ITodo }> = (props) => {
  const context = useContext(AppContext);
  const onButtonClick = () => {
    context.onToggleTodo(props.todo);
  };

  const selectStyle = props.todo.isActive
    ? styles.activateButton
    : styles.deactivateButton;

  return (
    <div className={styles.todo}>
      <div
        className={styles.title}
      >{`${props.todo.title} (${props.todo.id})`}</div>
      <div className={selectStyle} onClick={onButtonClick}>
        {props.todo.isActive ? "Activate" : "Deactivate"}
      </div>
    </div>
  );
};

export default Todo;
