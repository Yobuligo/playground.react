import { useContext, useEffect } from "react";
import { AppContext } from "../model/AppContext";

const PersonDetails: React.FC = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    console.log(`Lastname of selected person was changed`);
  }, [context.selectedPerson.lastname]);

  return (
    <>
      <h3>Person Details</h3>
      <div>
        {context.selectedPerson.firstname} {context.selectedPerson.firstname}
      </div>
    </>
  );
};

export default PersonDetails;
