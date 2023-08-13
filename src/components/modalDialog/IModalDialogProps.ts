import { IModalDialogConfig } from "./IModalDialogConfig";

export interface IModalDialogProps {
  config: IModalDialogConfig;
  onClose?: () => void;
}
