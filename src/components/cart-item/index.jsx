import { useContext } from "react";
import { CartContext } from "../../App";
import remove from "../../assets/remove_icon.png";
import "./style.css";

export const CartItem = ({
  cartItemID,
  imageUrl,
  title,
  author,
  description,
  price,
}) => {
  const cartContext = useContext(CartContext);

  const onCartItemRemoveHandler = () => {
    cartContext.removeFromCart(cartItemID);
  };

  return (
    <div className="cart-item">
      <img className="img" src={imageUrl} />

      <div className="info">
        <p>{title}</p>
        <p>{author}</p>
        <p>{description}</p>
      </div>

      <p>{price}</p>

      <div className="remove">
        <img src={remove} onClick={onCartItemRemoveHandler} />
        <p>Remove from cart</p>
      </div>
    </div>
  );
};
