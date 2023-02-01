import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { routes } from "./router";
import { v4 } from "uuid";

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  //This will add book to cart
  const addToCart = (book) => {
    setCartItems([...cartItems, { cartItemID: v4(), ...book }]);
  };

  const removeFromCart = (cartItemID) => {
    const updatedItems = cartItems.filter(
      (item) => item.cartItemID != cartItemID
    );
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart: addToCart,
        removeFromCart,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <div style={{ padding: 20 }}>
            <Routes>
              {routes.map((r) => {
                return <Route key={r.name} path={r.path} element={r.element} />;
              })}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
