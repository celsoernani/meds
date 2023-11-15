const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meds</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Menu
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/medsrestaurante/"
                target="_blank"
                className="hover:text-gray-300"
              >
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
