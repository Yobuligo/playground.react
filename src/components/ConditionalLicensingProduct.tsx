import { IProductsDTO } from "../model/IProductsDTO";
import ConditionalLicensingModule from "./ConditionalLicensingModule2";
import styles from "./ConditionalLicensingProduct.module.css";

const ConditionalLicensingProduct: React.FC<{ product: IProductsDTO }> = (
  props
) => {
  const items = props.product.modules.map((module) => (
    <ConditionalLicensingModule key={module.name} module={module} />
  ));
  return (
    <>
      <h3>{props.product.name}</h3>
      <div className={styles.conditionalLicensingProduct}>{items}</div>
    </>
  );
};

export default ConditionalLicensingProduct;
