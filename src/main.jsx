import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home/home.page.jsx";
import JobPage from "./pages/job/job.page";

import RootLayout from "./layouts/root.layout";
import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";
import MainLayout from "./layouts/main.layout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/job/:id",
            element: <JobPage />,
          },
        ],
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
