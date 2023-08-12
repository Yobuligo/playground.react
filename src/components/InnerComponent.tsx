import { useModalDialog } from "../hooks/useModalDialog";
import { Info } from "./Info";

export const InnerComponent: React.FC = () => {
  const modalDialog = useModalDialog();
  
  return (
    <button
      onClick={() =>
        modalDialog.show(<Info info="Here is the content of the Info dialog" />)
      }
    >
      Open Dialog
    </button>
  );
};
