import { CartItem } from "../../components/cart-item";
import "./style.css";

const cartItems = [
  {
    bookID: 1,
    image: "https://picsum.photos/300/300",
    title: "XYZ",
    author: "ABC",
    description: "JHJKDHH hifhifiuwh",
    price: "$100",
  },
  {
    bookID: 1,
    image: "https://picsum.photos/300/300",
    title: "XYZ",
    author: "ABC",
    description: "JHJKDHH hifhifiuwh",
    price: "$100",
  },
  {
    bookID: 1,
    image: "https://picsum.photos/300/300",
    title: "XYZ",
    author: "ABC",
    description: "JHJKDHH hifhifiuwh",
    price: "$100",
  },
];

export const Cart = () => {
  return (
    <div className="cart-container">
      {cartItems.map((item) => {
        return <CartItem key={cartItems.bookID} {...item} />;
      })}
    </div>
  );
};
