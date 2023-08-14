import { LabeledInput } from "../../components/labeledInput/LabeledInput";

export const Login: React.FC = () => {
  return (
    <div>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          event.preventDefault()
        }
      >
        <LabeledInput label="Username"/>
        <LabeledInput label="Password"/>
      </form>
    </div>
  );
};
