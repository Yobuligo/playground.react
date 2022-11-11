import { Person } from "../models/Person";
import PersonCard from "./PersonCard";

const PersonList: React.FC<{ persons?: Person[] }> = (props) => {
  const items = props.persons?.map((person) => {
    return <PersonCard key={person.id} person={person} />;
  });
  return (
    <section>
      <ol>{items}</ol>
    </section>
  );
};

export default PersonList;
