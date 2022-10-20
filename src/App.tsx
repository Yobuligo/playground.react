import { useState } from "react";
import { Dialog } from "./components/Dialog";

const App = () => {
  const [dialogActive, setDialogActive] = useState(false);

  const toggle = () => {
    setDialogActive((present) => {
      if (present) {
        return false;
      } else {
        return true;
      }
    });
  };

  const onToggleClickHandler = () => {
    toggle();
  };

  return (
    <div>
      {dialogActive && (
        <Dialog
          title="Button was clicked"
          message="Button was clicked. Confirm message"
          onOkay={onToggleClickHandler}
        />
      )}
      <div>
        <h1>Das ist ein Test</h1>
        <button type="button" onClick={onToggleClickHandler}>
          Open Dialog
        </button>
      </div>
    </div>
  );
};

export default App;
