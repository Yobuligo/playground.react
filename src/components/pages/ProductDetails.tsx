import { useNavigate, useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const params = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const onNavigateBackHandler = () => {
    navigate("/products");
  };
  return (
    <section>
      <h1>Product Details</h1>
      <p>
        Product details for product with product id {params.productId} is
        displayed
      </p>
      <p>
        <button onClick={onNavigateBackHandler}>Navigate Back</button>
      </p>
    </section>
  );
};

export default ProductDetails;
