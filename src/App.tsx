import ContextComponent from "./components/ContextComponent/ContextComponent";
import { AppContext, AppContextData } from "./context/AppContext";
import Person from "./feature/person/Person";

const App: React.FC = () => {
  return (
    <ContextComponent context={AppContext} contextData={AppContextData}>
      <Person />
    </ContextComponent>
  );
};

export default App;
