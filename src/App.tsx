import { useEffect, useState } from "react";

const ResetComponent: React.FC<{ value: string }> = (props) => {
  console.log(`ResetComponent was rebuild`);

  useEffect(() => {
    console.log(`UseEffect Callback was called`);
    const timer = setTimeout(() => {
      console.log(`Timer finished`);
    }, 5000);
  }, []);

  return <>{props.value}</>;
};

const App: React.FC = () => {
  const [value, setValue] = useState("");

  console.log(`App was rebuild`);

  return (
    <>
      <ResetComponent value={value} />
      <button
        onClick={() => {
          setValue(new Date().toString());
        }}
      >
        Trigger Reset
      </button>
    </>
  );
};

export default App;
