import { useState } from "react";
import IPerson from "../models/IPerson";
import PersonList from "./PersonList";
import styles from "./Persons.module.css";

const Persons: React.FC = () => {
  const mapPersons = (data: any): IPerson[] => {
    return data.result.map((row: any) => {
      return { id: row.id, firstname: row.firstname, lastname: row.lastname };
    });
  };

  const onLoadPersonsHandler = async () => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    fetch("http://localhost:8080/api/persons", {
      // mode: "no-cors",
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .catch((reason) => {
        console.log(`Error Loading Persons. ${reason}`);
      })
      .then((data) => {
        setPersons(mapPersons(data.results));
      });
    // const data = await response.json();
    // setPersons(mapPersons(data));
  };

  const [persons, setPersons] = useState<IPerson[]>([
    { id: 1, firstname: "Stacey", lastname: "Starfish" },
  ]);

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
