import { ReactNode } from "react";

export interface IAppContext {
  showModalDialog: boolean;
  setShowModalDialog: (showModalDialog: boolean) => void;
  modalDialogComponent: ReactNode;
  setModalDialogComponent: (modalDialogComponent: ReactNode) => void;
}
