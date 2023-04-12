import { useState } from "react";
import { IProductsDTO } from "../model/IProductsDTO";
import { Mode } from "../model/Mode";
import styles from "./ConditionalLicensing.module.css";
import ConditionalLicensingProductsList from "./ConditionalLicensingProductsList";

const ConditionalLicensing: React.FC<{ products: IProductsDTO[] }> = (
  props
) => {
  const [mode, setMode] = useState<Mode>(Mode.Inherited);
  return (
    <div className={styles.conditionalLicensing}>
      <h3>License software modules</h3>
      <div>
        <button>Inherited</button>
        <button>None</button>
        <button>Customized</button>
      </div>
      <label htmlFor="mode">Use conditional licensing</label>
      <select
        name="mode"
        id="mode"
        onChange={(event) => {
          switch (event.target.value) {
            case "inherited":
              setMode(Mode.Inherited);
              break;
            case "none":
              setMode(Mode.None);
              break;
            case "customized":
              setMode(Mode.Customized);
              break;
          }
        }}
        value={mode}
      >
        <option value="inherited">{Mode["None"]}</option>
        <option value="none">{Mode["Inherited"]}</option>
        <option value="customized">{Mode["Customized"]}</option>
      </select>
      {mode === Mode.Customized && (
        <ConditionalLicensingProductsList products={props.products} />
      )}
    </div>
  );
};

export default ConditionalLicensing;
