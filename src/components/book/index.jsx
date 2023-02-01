import "./style.css";

export const Book = ({ title, author, price, description, imageUrl }) => {
  return (
    <div className="book-container">
      <img src={imageUrl} />
      <div className="info">
        <p>Book Title: {title}</p>
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};
