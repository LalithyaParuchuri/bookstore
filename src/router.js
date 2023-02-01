import { createBrowserRouter } from "react-router-dom";
import { ListBooks } from "./pages/list-books";

export const routes = [
  {
    path: "/",
    name: "Books",
    element: <ListBooks />,
  },
];

export const router = createBrowserRouter(routes);
