import { Book } from "../../components/book";
import { booksData } from "./data";
import "./style.css";

export const ListBooks = () => {
  return (
    <div className="book-list">
      {booksData.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );
};
