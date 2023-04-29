import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Person: React.FC = () => {
  const context = useContext(AppContext);
  const [firstname, setFirstname] = context.firstname;
  return (
    <>
      <div>{firstname}</div>
      <div>
        <input
          type="text"
          onChange={(event) => setFirstname(event.target.value)}
        />
      </div>
    </>
  );
};

export default Person;
