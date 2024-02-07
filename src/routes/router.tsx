import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/app-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <h2>Simple</h2>
      </Layout>
    ),
  },
]);
