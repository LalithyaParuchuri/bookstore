import { createBrowserRouter } from "react-router-dom";
import { Cart } from "./pages/cart";
import { ListBooks } from "./pages/list-books";

export const routes = [
  {
    path: "/",
    name: "Books",
    element: <ListBooks />,
  },
  {
    path: "/cart",
    name: "Cart",
    element: <Cart />,
  },
];

export const router = createBrowserRouter(routes);
