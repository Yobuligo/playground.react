import { Changer } from "./components/Changer";
import Test from "./components/Test";
import { ContextFactory } from "./services/ContextFactory";

export const { Provider, useStore } = ContextFactory({
  firstname: "Stacey",
  lastname: "Starfish",
});

const App: React.FC = () => {
  return (
    <Provider>
      <Test />
      <Changer />
    </Provider>
  );
};

export default App;
