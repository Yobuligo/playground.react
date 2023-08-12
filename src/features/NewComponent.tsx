import { useModalDialog } from "../hooks/useModalDialog";
import { ComplexDialog } from "./ComplexDialog";

export const NewComponent: React.FC = () => {
  const modalDialog = useModalDialog();

  return (
    <button onClick={() => modalDialog.show(<ComplexDialog />)}>
      Open another component as dialog
    </button>
  );
};
