import { useContext } from "react";
import { CartContext } from "../../App";
import { CartItem } from "../../components/cart-item";
import "./style.css";

export const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.cartItems || [];

  if (cartItems.length == 0) {
    return <div>Cart Is Empty, Fill The Cart</div>;
  }

  return (
    <div className="cart-container">
      {cartItems.map((item) => {
        return <CartItem key={item.cartItemID} {...item} />;
      })}
      <div className="total">
        <div></div>
        <div>Total: </div>
        <div>{cartContext.getTotal()}</div>
      </div>
    </div>
  );
};
