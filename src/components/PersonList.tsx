import { ReactNode, useContext, useEffect, useState } from "react";
import { AppContext } from "../model/AppContext";
import Person from "./Person";

const PersonList: React.FC = () => {
  const context = useContext(AppContext);
  const [items, setItems] = useState<ReactNode>();

  useEffect(() => {
    console.log(`Rerender person list items`);
    setItems(() =>
      context.persons.map((person) => (
        <Person key={crypto.randomUUID()} person={person} />
      ))
    );
  }, [context.persons, context.persons.length]);

  return (
    <>
      <h3>Person list</h3>
      {items}
    </>
  );
};

export default PersonList;
