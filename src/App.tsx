import { ReactNode, useState } from "react";
import { InnerComponent } from "./components/InnerComponent";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { AppContext } from "./context/AppContext";

const App: React.FC = () => {
  const [showModalDialog, setShowModalDialog] = useState(false);
  const [modalDialogComponent, setModalDialogComponent] =
    useState<ReactNode>(null);

  return (
    <AppContext.Provider
      value={{
        showModalDialog,
        setShowModalDialog,
        modalDialogComponent,
        setModalDialogComponent,
      }}
    >
      {showModalDialog && (
        <ModalDialog onClose={() => setShowModalDialog(false)}>
          {modalDialogComponent}
        </ModalDialog>
      )}
      <p>Here is my app</p>
      <InnerComponent />
    </AppContext.Provider>
  );
};

export default App;
