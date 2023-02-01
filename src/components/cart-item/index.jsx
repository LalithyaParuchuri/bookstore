import { useSnackbar } from "notistack";
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
  const { enqueueSnackbar } = useSnackbar();

  const onCartItemRemoveHandler = () => {
    cartContext.removeFromCart(cartItemID);
    enqueueSnackbar("Sucessfully removed from the cart", {
      variant: "success",
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
    });
  };

  return (
    <div className="cart-item">
      <div className="cart">
        <img className="img" src={imageUrl} />

        <div>
          <p>{title}</p>
          <p>{author}</p>
          <p>{description}</p>
        </div>

        <p>{price}</p>
      </div>
      <div className="remove" onClick={onCartItemRemoveHandler}>
        <img src={remove} />
        <p>Remove from cart</p>
      </div>
    </div>
  );
};
