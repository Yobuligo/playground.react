import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import { Person } from "./models/Person";
import { ORM } from "./ORM";
import PersonDetail from "./pages/PersonDetail";
import Persons from "./pages/Persons";
import Welcome from "./pages/Welcome";

const orm = new ORM(
  "https://fir-b80e3-default-rtdb.europe-west1.firebasedatabase.app"
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "welcome", element: <Welcome /> },
      {
        path: "persons",
        element: <Persons />,
        loader: async () => {
          const persons = Person.findAll();
          return persons;
        },
        children: [{ path: ":id", element: <PersonDetail /> }],
      },
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
