import { useEffect, useState } from "react";

const UserInput: React.FC<{
  onConfirm: (text: string) => void;
  typeWriterActive: boolean;
}> = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onConfirm(enteredText);
  };

  useEffect(() => {
    if (props.typeWriterActive) {
      setEnteredText("");
    }
  }, [props.typeWriterActive]);

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="userInput">Enter the chain</label>
        <input
          id="userInput"
          name="userInput"
          type="text"
          value={enteredText}
          onChange={(event) => setEnteredText(event.target.value)}
        />
        <button>Confirm</button>
      </form>
    </>
  );
};

export default UserInput;
