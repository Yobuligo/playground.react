import { useRef } from "react";

const UserInput: React.FC<{ onConfirm: (text: string) => void }> = (props) => {
  const enteredText = useRef<HTMLInputElement>(null);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = enteredText.current?.value;
    if (!value) {
      throw new Error("Entered value must not be null");
    }
    props.onConfirm(value);
  };
  
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="userInput">Enter the chain</label>
        <input id="userInput" name="userInput" type="text" ref={enteredText} />
        <button>Confirm</button>
      </form>
    </>
  );
};

export default UserInput;
