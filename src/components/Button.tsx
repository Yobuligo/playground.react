import { DocumentState } from "../model/DocumentState";

const Button: React.FC<{
  documentState: DocumentState;
  state: DocumentState;
  onStateChange: (documentState: DocumentState) => void;
}> = (props) => {
  return (
    <button
      disabled={props.state === props.documentState}
      onClick={() => props.onStateChange(props.documentState)}
    >
      {DocumentState[props.documentState]}
    </button>
  );
};

export default Button;
