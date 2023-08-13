import { IModalDialogConfig } from "../components/modalDialog/IModalDialogConfig";

export interface IAppContext {
  modalDialogConfig: IModalDialogConfig;
  setModalDialogConfig: (modalDialogConfig: IModalDialogConfig) => void;
}
