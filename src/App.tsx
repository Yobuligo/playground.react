import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import MainHeader from "./components/MainHeader";
import Contact from "./components/pages/Contact";
import ProductDetails from "./components/pages/ProductDetails";
import Products from "./components/pages/Products";
import Welcome from "./components/pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHeader />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/welcome", element: <Welcome /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetails /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
