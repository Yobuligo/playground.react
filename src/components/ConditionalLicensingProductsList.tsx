import { IProductsDTO } from "../model/IProductsDTO";
import ConditionalLicensingProduct from "./ConditionalLicensingProduct";

const ConditionalLicensingProductsList: React.FC<{
  products: IProductsDTO[];
}> = (props) => {
  const items = props.products.map((product) => (
    <ConditionalLicensingProduct key={product.name} product={product} />
  ));
  return <>{items}</>;
};

export default ConditionalLicensingProductsList;
