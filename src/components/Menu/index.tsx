interface MenuItem {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface MenuProps {
  addToCart: (itemName: string) => void;
  stock: { [key: string]: number };
}

const Menu: React.FC<MenuProps> = ({ addToCart, stock }) => {
  const menuItems: MenuItem[] = [
    { id: 1, name: "Peixe", price: 10.99, stock: stock.Peixe },
    { id: 2, name: "Baião", price: 12.99, stock: stock.Baião },
    { id: 3, name: "Batata", price: 12.99, stock: stock.Batata },
  ];

  const handleAddToCart = (item: string) => {
    addToCart(item);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="p-4 shadow rounded">
            <h3 className="text-lg font-semibold mb-2">{menuItem.name}</h3>
            <p>Preço: R${menuItem.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(menuItem.name)}
              disabled={menuItem.stock <= 0}
              className={`mt-2 bg-gray-800 text-white py-1 px-2 rounded ${
                menuItem.stock <= 0 && "opacity-50 cursor-not-allowed"
              }`}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
