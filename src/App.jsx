import "./App.css";
import {BrowserRouter, useRoutes} from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import MainLayout from "./layout/MainLayout.jsx";

function App() {
  const currentPage = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <ShowCreators />,
        },
        {
          path: "new",
          element: <AddCreator />,
        },
        {
          path: ":id",
          element: <ViewCreator />,
        },
        {
          path: "edit/:id",
          element: <EditCreator />,
        },
      ],
    },
  ]);

  return currentPage;
}

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
