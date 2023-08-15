import { useState } from "react";
import styles from "./App.module.css";
import { IModalDialogConfig } from "./components/modalDialog/IModalDialogConfig";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { AppContext } from "./context/AppContext";
import { Element } from "./features/Element";
import { StartScreen } from "./features/startScreen/StartScreen";

const App: React.FC = () => {
  const [modalDialogConfig, setModalDialogConfig] =
    useState<IModalDialogConfig>({
      component: null,
      show: false,
      title: "",
      hideCloseButton: false,
    });

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
              return { ...previous };
            })
          }
        />
      )}
      <p>Here is my app</p>
      <StartScreen />
      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>

      <div className={styles.elementRow}>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
        <div className={styles.element}>
          <Element />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
