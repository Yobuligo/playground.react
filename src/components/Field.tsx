import { useEffect, useState } from "react";

import { State } from "../model/State";
import styles from "./Field.module.css";

const Field: React.FC<{ state: State; onActivate: () => void }> = (props) => {
  const [caption, setCaption] = useState("");
  useEffect(() => {
    switch (props.state) {
      case State.O: {
        setCaption("O");
        break;
      }
      case State.X: {
        setCaption("X");
        break;
      }
      default: {
        setCaption("_");
        break;
      }
    }
  }, [props.state]);

  return (
    <button
      className={styles.button}
      onClick={() => {
        props.onActivate();
      }}
    >
      {caption}
    </button>
  );
};

export default Field;
