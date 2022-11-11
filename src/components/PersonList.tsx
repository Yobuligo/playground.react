import IPerson from "../models/IPerson";
import Person from "./Person";

const PersonList: React.FC<{ persons?: IPerson[] }> = (props) => {
  const items = props.persons?.map((person) => {
    return <Person key={person.id} person={person} />;
  });
  return (
    <section>
      <ol>{items}</ol>
    </section>
  );
};

export default PersonList;
