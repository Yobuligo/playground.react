import { ReactNode } from "react";

export interface IModalDialogConfig {
  component?: ReactNode;
  hideCloseButton?: boolean;
  show: boolean;
  title?: string;
}
