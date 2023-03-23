import { IContext } from "./IContext";

export const initializeContext = (): IContext => {
  return {
    todos: [
      { id: "1", title: "First Todo", isActive: false },
      { id: "2", title: "Second Todo", isActive: false },
      { id: "3", title: "Third Todo", isActive: false },
    ],
    onToggleTodo: () => {},
  };
};
