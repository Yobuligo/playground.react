import { Outlet } from "react-router-dom";
import PersonList from "./PersonList";

const Persons: React.FC = () => {
  return (
    <>
      <h1>Persons</h1>
      <PersonList />
      <Outlet />
    </>
  );
};

export default Persons;
