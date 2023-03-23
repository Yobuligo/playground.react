import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Todo from "./Todo";

const Todos: React.FC = () => {
  const context = useContext(AppContext);
  const items = context.todos.map((todo) => <Todo key={todo.id} todo={todo} />);
  return <>{items}</>;
};

export default Todos;
