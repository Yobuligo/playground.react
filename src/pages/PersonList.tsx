import { Link, useLoaderData } from "react-router-dom";
import { IPerson } from "../models/IPerson";

const PersonList: React.FC = () => {
  const persons = useLoaderData() as IPerson[];
  const items = persons.map((person) => {
    return (
      <li key={person.id}>
        <Link
          to={person.id.toString()}
        >{`${person.firstname} ${person.lastname}`}</Link>
      </li>
    );
  });
  return (
    <>
      <ul>{items}</ul>
    </>
  );
};

export default PersonList;
