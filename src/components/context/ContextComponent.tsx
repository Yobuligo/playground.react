import React, { ReactNode, useState } from "react";
import { ITodo } from "../../model/ITodo";
import { AppContext } from "./AppContext";
import { IContext } from "./IContext";

const ContextComponent: React.FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: "1", title: "First Todo", isActive: false },
    { id: "2", title: "Second Todo", isActive: false },
    { id: "3", title: "Third Todo", isActive: false },
  ]);

  const context: IContext = {
    todos: todos,
    onToggleTodo: (todo) => {
      setTodos((previous) => {
        for (const previousTodo of previous) {
          if (previousTodo.id === todo.id) {
            todo.isActive = !todo.isActive;
          }
        }
        return [...previous];
      });
    },
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default ContextComponent;
