import { useMemo, useState } from "react";
import TypeWriter from "./components/TypeWriter";
import UserInput from "./components/UserInput";
import { LetterPicker } from "./services/LetterPicker";

const App: React.FC = () => {
  const letterPicker = useMemo(() => new LetterPicker(), []);
  const [text, setText] = useState(letterPicker.next());
  const onConfirm = (text: string) => {
    setText(text);
  };
  return (
    <>
      <TypeWriter text={text} />
      <UserInput onConfirm={onConfirm} />
    </>
  );
};

export default App;
