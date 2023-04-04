import { useContext } from "react";
import { AppContext } from "../model/AppContext";

const ChangeStaceyButton: React.FC = () => {
  const context = useContext(AppContext);
  const onChangeStaceyClick = () => {
    const stacey = context.persons.find(
      (person) => person.firstname === "Stacey"
    );
    if (!stacey) {
      console.log(`Stacey not found`);
      return;
    }
    stacey.lastname = new Date().getMilliseconds().toString();
    context.onUpdatePerson(stacey)
  };
  return <button onClick={onChangeStaceyClick}>Change Stacey</button>;
};

export default ChangeStaceyButton;
