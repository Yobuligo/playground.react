import ContextComponent from "./components/context/ContextComponent";
import Todos from "./components/Todos";

const App: React.FC = () => {
  return (
    <ContextComponent>
      <Todos />
    </ContextComponent>
  );
};

export default App;
