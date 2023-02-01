import "./style.css";
import cart from "../../assets/cart_icon.png";
export const Book = ({ title, author, price, description, imageUrl }) => {
  return (
    <div className="book-container">
      <img className="cart" src={cart} />
      <img className="img" src={imageUrl} />
      <div className="info">
        <p>Book Title: {title}</p>
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};
