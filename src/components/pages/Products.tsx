import { Link } from "react-router-dom";

const Products: React.FC = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/book">Book</Link>
        </li>
        <li>
          <Link to="/products/handy">Handy</Link>
        </li>
        <li>
          <Link to="notebook">Notebook</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
