import IPerson from "../models/IPerson";
import styles from "./Person.module.css";

const Person: React.FC<{ person: IPerson }> = (props) => {
  return (
    <div className={styles.person}>
      <div>{props.person.id}</div>
      <div>
        {props.person.firstname} {props.person.lastname}
      </div>
    </div>
  );
};

export default Person;
