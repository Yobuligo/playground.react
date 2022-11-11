import { Person } from "../models/Person";
import styles from "./Person.module.css";

const PersonCard: React.FC<{ person: Person }> = (props) => {
  return (
    <div className={styles.person}>
      <div>{props.person.id}</div>
      <div>
        {props.person.firstname} {props.person.lastname}
      </div>
    </div>
  );
};

export default PersonCard;
