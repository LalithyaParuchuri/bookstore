import { createBrowserRouter } from "react-router-dom";
import { ListBooks } from "./pages/list-books";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListBooks />,
  },
]);
