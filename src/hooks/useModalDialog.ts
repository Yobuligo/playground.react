import { ReactNode, useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useModalDialog = () => {
  const context = useContext(AppContext);

  const show = (component: ReactNode) => {
    context.setModalDialogComponent(component);
    context.setShowModalDialog(true);
  };

  const close = () => {
    context.setModalDialogComponent(null);
    context.setShowModalDialog(false);
  };

  return { show, close };
};
