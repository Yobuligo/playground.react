import styles from "./ComplexDialog.module.css";

export const ComplexDialog: React.FC = () => {
  return (
    <>
      <form className={styles.complexDialog}>
        <div>
          <div>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="text" id="username" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input type="password" id="password" />
          </div>
        </div>
      </form>
    </>
  );
};
