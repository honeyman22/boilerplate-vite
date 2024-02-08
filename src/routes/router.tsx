import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/layout/app-layout";
import Example from "../components/layout/example";
import ProtectedRoute from "./protected-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Example />,
      },
    ],
  },
]);
