import image from "../../assets/person.png";
import { ISize } from "../../types/ISize";
import { repeat } from "../../utils/repeat";
import { Column } from "../column/Column";
import styles from "./Grid.module.css";

export const Grid: React.FC<{ size: ISize }> = (props) => {
  const items = () =>
    repeat(props.size.y, (index) => (
      <Column key={index} size={props.size} y={index} />
    ));

  return (
    <div className={styles.grid}>
      <img src={image} alt="Person" />
      <div className={styles.gridComponent}>{items()}</div>
    </div>
  );
};
