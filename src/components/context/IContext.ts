import { ITodo } from "../../model/ITodo";

export interface IContext {
  todos: ITodo[];
  onToggleTodo: (todo: ITodo) => void;
}
