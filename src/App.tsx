import { useEffect, useState } from "react";
import ConditionalLicensing from "./components/ConditionalLicensing";
import { IProductsDTO } from "./model/IProductsDTO";

const App: React.FC = () => {
  const [products, setProducts] = useState<IProductsDTO[]>([]);

  useEffect(() => {
    setProducts(() => {
      return [
        {
          name: "CB Transformation",
          modules: [
            { name: "Transformation Cockpit", enabled: true },
            { name: "S4/Hana", enabled: true },
          ],
        },
        {
          name: "CB Interface Discovery",
          modules: [
            { name: "PI", enabled: true },
            { name: "File Interface", enabled: false },
            { name: "Customer API", enabled: true },
            { name: "Soldoc Integrator", enabled: false },
            { name: "Crystal Bridge Visual", enabled: true },
          ],
        },
      ];
    });
  }, []);

  return (
    <>
      <ConditionalLicensing products={products} />
    </>
  );
};

export default App;
