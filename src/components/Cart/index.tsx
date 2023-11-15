import React from "react";

interface CartProps {
  cartItems: string[];
  removeFromCart: (itemName: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      <ul className="max-h-48 overflow-y-auto">
        {cartItems.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow rounded" m-1>
            <li>{item}</li>
            <button
              onClick={() => removeFromCart(item)}
              className="mt-2 bg-gray-800 text-white py-1 px-2 rounded"
            >
              Remover
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
