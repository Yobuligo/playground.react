import { useState } from "react";
import { request } from "../DataRequest/DataRequest";
import { Person } from "../models/Person";
import PersonList from "./PersonList";
import styles from "./Persons.module.css";

const Persons: React.FC = () => {
  const onLoadPersonsHandler = async () => {
    setPersons(await request(Person));
  };

  const [persons, setPersons] = useState<Person[]>([]);

  return (
    <div className={styles.personList}>
      <h2>Overview Persons</h2>
      <button type="button" onClick={onLoadPersonsHandler}>
        Load
      </button>
      <PersonList persons={persons} />
    </div>
  );
};

export default Persons;
