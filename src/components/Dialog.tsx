import { useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Dialog.module.css";

export const Dialog: React.FC<{
  title: string;
  message: string;
  style?: string;
  onOkay?: () => void;
}> = (props) => {
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const onOkayButtonHandler = () => {
    console.log(h3Ref.current);
    props.onOkay?.();

    const CLICKED_ITEMS = "CLICKED_ITEMS";

    let clickedTimes: number = Number(
      localStorage.getItem(CLICKED_ITEMS)
        ? localStorage.getItem("CLICKED_TIMES")
        : 0
    );
    clickedTimes++;
    localStorage.setItem(CLICKED_ITEMS, clickedTimes.toString());
  };
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className={styles.backdrop} onClick={props.onOkay}></div>
          <div className={props.style ? props.style : styles.dialog}>
            <header className={styles.header}>
              <h3 ref={h3Ref}>{props.title}</h3>
            </header>
            <p>{props.message}</p>
            <footer className={styles.footer}>
              <button onClick={onOkayButtonHandler}>Okay</button>
            </footer>
          </div>
        </>,
        document.getElementById("backdrop-root")!
      )}
    </>
  );
};
