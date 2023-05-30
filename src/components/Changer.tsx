import { useStore } from "../App";

export const Changer: React.FC = () => {
  const [, setStore] = useStore();
  return (
    <button
      onClick={() => {
        setStore({
          firstname: new Date().toString(),
          lastname: new Date().toString(),
        });
      }}
    >
      Click Me
    </button>
  );
};
