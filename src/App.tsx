import { useState } from "react";
import { IModalDialogConfig } from "./components/modalDialog/IModalDialogConfig";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { AppContext } from "./context/AppContext";
import { StartScreen } from "./features/startScreen/StartScreen";

const App: React.FC = () => {
  const [modalDialogConfig, setModalDialogConfig] =
    useState<IModalDialogConfig>({ component: null, show: false, title: "" });

  return (
    <AppContext.Provider
      value={{
        modalDialogConfig,
        setModalDialogConfig,
      }}
    >
      {modalDialogConfig.show && (
        <ModalDialog
          config={modalDialogConfig}
          onClose={() =>
            setModalDialogConfig((previous) => {
              previous.show = false;
              return previous;
            })
          }
        />
      )}
      <p>Here is my app</p>
      <StartScreen />
    </AppContext.Provider>
  );
};

export default App;
