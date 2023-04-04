import { useState } from "react";
import AddPersonButton from "./components/AddPersonButton";
import ChangeStaceyButton from "./components/ChangeStaceyButton";
import PersonList from "./components/PersonList";
import { AppContext } from "./model/AppContext";
import { IPerson } from "./model/IPerson";
import PersonDetails from "./components/PersonDetails";

const App: React.FC = () => {
  console.log(`Render Application`);
  const [persons, setPersons] = useState([
    { firstname: "Stacey", lastname: "Starfish" },
    { firstname: "Bertha", lastname: "Bear" },
  ]);

  const onAddPerson = (person: IPerson) => {
    setPersons((previous) => [...previous, person]);
  };

  const onUpdatePerson = (person: IPerson) => {
    setPersons((previousPersons) =>
      previousPersons.map((cachedPerson) => {
        if (cachedPerson.firstname === person.firstname) {
          cachedPerson.lastname = person.lastname;
          setSelectedPerson(cachedPerson);
        }
        return cachedPerson;
      })
    );
  };

  const [selectedPerson, setSelectedPerson] = useState<IPerson>({
    firstname: "Stacey",
    lastname: "Starfish",
  });

  return (
    <AppContext.Provider
      value={{
        persons: persons,
        selectedPerson: selectedPerson,
        onAddPerson: (person) => onAddPerson(person),
        onUpdatePerson: (person) => onUpdatePerson(person),
      }}
    >
      <AddPersonButton />
      <ChangeStaceyButton />
      <PersonDetails />
      <PersonList />
    </AppContext.Provider>
  );
};

export default App;
