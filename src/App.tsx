import ContextComponent from "./components/ContextComponent/ContextComponent";
import { AppContext, AppContextData } from "./context/AppContext";
import Person from "./feature/person/Person";
import PersonForm from "./feature/person/PersonForm";

const App: React.FC = () => {
  return (
    <ContextComponent context={AppContext} contextData={AppContextData}>
      <Person />
      <PersonForm />
    </ContextComponent>
  );
};

export default App;
