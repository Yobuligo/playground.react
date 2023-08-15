import { useModalDialog } from "../../hooks/useModalDialog";
import { Login } from "../login/Login";

export const StartScreen: React.FC = () => {
  const modalDialog = useModalDialog();

  return (
    <button onClick={() => modalDialog.show(<Login />, "Login")}>Login</button>
  );
};
