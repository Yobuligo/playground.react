import { Reducer, useReducer } from "react";
import styles from "./Login.module.css";

enum LoginAction {
  SET_USERNAME,
  SET_PASSWORD,
}

type ILoginAction =
  | { type: LoginAction.SET_USERNAME; username: string }
  | { type: LoginAction.SET_PASSWORD; password: string };

interface ILoginState {
  password: string;
  username: string;
  areCredentialsValid: boolean;
}

const loginReducer: Reducer<ILoginState, ILoginAction> = (
  prevState,
  action
) => {
  const newState = { ...prevState };
  switch (action.type) {
    case LoginAction.SET_USERNAME: {
      newState.username = action.username;
      break;
    }
    case LoginAction.SET_PASSWORD: {
      newState.password = action.password;
      break;
    }
  }

  if (newState.username && newState.password) {
    newState.areCredentialsValid = true;
  }

  return newState;
};

export const Login: React.FC = () => {
  const [loginState, loginDispatcher] = useReducer<
    Reducer<ILoginState, ILoginAction>
  >(loginReducer, {
    areCredentialsValid: false,
    password: "",
    username: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    loginDispatcher({
      type: LoginAction.SET_USERNAME,
      username: event.target.value,
    });
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    loginDispatcher({
      type: LoginAction.SET_PASSWORD,
      password: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input
              type="text"
              id="username"
              value={loginState.username}
              onChange={onChangeUsername}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={loginState.password}
              onChange={onChangePassword}
            />
          </div>
        </div>
      </form>
      <div className={styles.loginFooter}>
        <button disabled={!loginState.areCredentialsValid}>Login</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};
