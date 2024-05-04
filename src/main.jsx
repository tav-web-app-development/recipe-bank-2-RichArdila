import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewRecipe from "./Components/NewRecipe.jsx";
import ErrorPage from "./error-page.jsx";

const router = createBrowserRouter ([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/newRecipe",
    element: <NewRecipe/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
