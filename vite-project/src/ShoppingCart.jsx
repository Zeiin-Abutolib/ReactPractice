import React, { useState } from "react";



const products = [
  { id: 1, name: "LapTop", price: 2000 },
  { id: 2, name: "Book", price: 30 },
  { id: 3, name: "HeadPhones", price: 1500 },
];


export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updated = [...cart];
      updated.splice(index, 1);
      setCart(updated);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="proverka">
      <h1 className="Tovarlar">Товары</h1>
      <div className="qqq">
        {products.map((product) => (
          <div
            key={product.id}
            className="Cartalar"
          >
            <h2 className="qqq">{product.name}</h2>
            <p className="qqq">Цена: ${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="Addbtn"
            >
              Add +
            </button>
          </div>
        ))}
      </div>

      <h2 className="Korzina">Корзина</h2>
      <ul className="qqq">
        {cart.map((item, index) => (
          <li
            key={index}
            className="removeasd"
          >
            <span>
              {item.name} - ${item.price}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="Removebtn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="itogo">
        <p className="qqq">Итого: ${total}</p>
        <button
          onClick={clearCart}
          className="Clearbtn"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
