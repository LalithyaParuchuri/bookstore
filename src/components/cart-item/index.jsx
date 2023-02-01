import remove from "../../assets/remove_icon.png";
import "./style.css";

export const CartItem = ({ image, title, author, description, price }) => {
  return (
    <div className="cart-item">
      <img className="img" src={image} />

      <div className="info">
        <p>{title}</p>
        <p>{author}</p>
        <p>{description}</p>
      </div>

      <p>{price}</p>

      <div className="remove">
        <img src={remove} />
        <p>Remove from cart</p>
      </div>
    </div>
  );
};
