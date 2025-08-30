import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { navLinks } from "../constants";
const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuSelected, setIsMenuSelected] = useState(false);

  const handleMenuClick = () => {
    setIsMenuSelected((prevIsOpen) => !prevIsOpen);
  };
  return (
    <header className="bg-black/90 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space relative">
          <a
            href="/"
            className="transition-colors text-neutral-400 text-xl font-bold hover:text-white"
          >
            Danish
          </a>

          <div className="sm:hidden">
            {isMenuSelected ? (
              <ImCross
                className="w-4 h-4 text-neutral-400 hover:text-white  focus:outline-none cursor-pointer"
                aria-label="close"
                onClick={handleMenuClick}
              />
            ) : (
              <IoIosMenu
                className="w-6 h-6 text-neutral-400 hover:text-white  focus:outline-none cursor-pointer"
                aria-label="menu"
                onClick={handleMenuClick}
              />
            )}
          </div>

          <nav className="hidden sm:block">
            <NavItems />
          </nav>
          
        
        </div>
          <div
            className={`nav-sidebar ${
              isMenuSelected ? "max-h-screen" : "max-h-0"
            }`}
          >
            <nav className="p-5">
              <NavItems />
            </nav>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
