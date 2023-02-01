import "./style.css";
import cart from "../../assets/cart_icon.png";
import { useContext } from "react";
import { CartContext } from "../../App";
export const Book = ({ id, title, author, price, description, imageUrl }) => {
  const cartContext = useContext(CartContext);

  const addBookToCartHanlder = () => {
    const book = {
      id,
      title,
      author,
      price,
      description,
      imageUrl,
    };

    //Add book to cart context
    cartContext.addToCart(book);
  };

  return (
    <div className="book-container">
      <img className="cart" src={cart} onClick={addBookToCartHanlder} />
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
