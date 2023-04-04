import { useEffect } from "react";
import { IPerson } from "../model/IPerson";

const Person: React.FC<{ person: IPerson }> = (props) => {
  useEffect(() => {
    console.log(`Person Lastname changed`);
  }, [props.person.lastname]);

  return (
    <div>
      {props.person.firstname} {props.person.lastname}
    </div>
  );
};

export default Person;
