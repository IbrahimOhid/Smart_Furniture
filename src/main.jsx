import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Furniture from "./page/Furniture/Furniture.jsx";
import Shop from "./page/Shop/Shop.jsx";
import AboutUs from "./page/AboutUs/AboutUs.jsx";
import Contact from "./page/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/furniture",
        element: <Furniture />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
