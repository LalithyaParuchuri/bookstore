import { useContext } from "react";
import { CartContext } from "../../App";
import { CartItem } from "../../components/cart-item";
import "./style.css";

export const Cart = () => {
  const cartContext = useContext(CartContext);
  console.log(cartContext);
  const cartItems = cartContext.cartItems || [];

  return (
    <div className="cart-container">
      {cartItems.map((item) => {
        return <CartItem key={cartItems.bookID} {...item} />;
      })}
    </div>
  );
};
