import { ReactNode, useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useModalDialog = () => {
  const context = useContext(AppContext);

  const show = (component: ReactNode, title?: string) => {
    context.setModalDialogConfig({
      component,
      show: true,
      title,
    });
  };

  const close = () => {
    context.setModalDialogConfig({
      component: null,
      show: false,
      title: undefined,
    });
  };

  return { show, close };
};
