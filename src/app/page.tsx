"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import RestaurantStats from "@/components/Stats";
import Cart from "@/components/Cart";

interface Stock {
  [key: string]: number;
}

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [stock, setStock] = useState<Stock>({
    Peixe: 10,
    Baião: 15,
    Batata: 5,
  });

  const addToCart = (item: string) => {
    if (stock[item] > 0) {
      setCartItems([...cartItems, item]);
      setStock({ ...stock, [item]: stock[item] - 1 });
    } else {
      alert("Desculpe, o item está fora de estoque.");
    }
  };

  const removeFromCart = (item: string) => {
    const index = cartItems.indexOf(item);
    if (index > -1) {
      cartItems.splice(index, 1);
    }
    setCartItems([...cartItems]);

    setStock({ ...stock, [item]: stock[item] + 1 });
  };

  console.log(cartItems);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4" p-1>
          <div className="col-span-1">
            <Menu addToCart={addToCart} stock={stock} />
          </div>
          <div className="col-span-1">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
        <RestaurantStats stock={stock} />
      </div>
    </div>
  );
};

export default Home;
