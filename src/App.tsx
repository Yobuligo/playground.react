import { ReactNode, useState } from "react";

import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { AppContext } from "./context/AppContext";
import { InnerComponent } from "./features/InnerComponent";
import { NewComponent } from "./features/NewComponent";

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
      <NewComponent />
    </AppContext.Provider>
  );
};

export default App;
