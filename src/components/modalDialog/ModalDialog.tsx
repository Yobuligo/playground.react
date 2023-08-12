import ReactDOM from "react-dom";
import { Card } from "../card/Card";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalBackdrop} />
          <div className={styles.modalDialog}>
            <Card>
              <div>{props.children}</div>
              <div className={styles.modalDialogFooter}>
                <button onClick={props.onClose}>Close</button>
              </div>
            </Card>
          </div>
        </div>,
        document.getElementById("modalContainer")!
      )}
    </>
  );
};
