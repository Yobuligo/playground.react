import { useState } from "react";
import { IModuleDTO } from "../model/IModuleDTO";

const ConditionalLicensingModule: React.FC<{ module: IModuleDTO }> = (
  props
) => {
  const [checked, setChecked] = useState(props.module.enabled);
  return (
    <div>
      <input
        id="conditionalLicensingModule"
        name="conditionalLicensingModule"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((previous) => !previous)}
      />
      <label htmlFor="conditionalLicensingModule">{props.module.name}</label>
    </div>
  );
};

export default ConditionalLicensingModule;
