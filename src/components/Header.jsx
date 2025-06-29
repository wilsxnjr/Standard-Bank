import React from "react";
import logo from "../assets/Default.svg";
import search from "../assets/Search.svg";
import menu from "../assets/Menu.svg";
import conta from "../assets/conta.svg";

const Header = () => {
  const links = [
    { label: "Para Você", path: "#", id: 1 },
    { label: "Para Empresas", path: "#", id: 2 },
    { label: "Serviços", path: "#", id: 3 },
  ];
  return (
    <header className="bg-primary h-[65px] md:h-[75px]">
      <div className="h-full max-w-[1200px] m-auto flex items-center gap-8 px-4 justify-between">
        <a className="h-full px-2 md:px-0 py-4" href="#">
          <img className="h-full" src={logo} alt="Logo" />
        </a>
        <nav className="hidden md:flex items-center gap-4 justify-between w-full">
          <ul className="flex items-center gap-8">
            {links.map(({ label, path, id }) => (
              <li key={id}>
                <a className="text-white text-sm font-medium" href={path}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <button className="text-white text-sm font-medium p-4 flex items-center gap-1">
              <img className="w-[18px]" src={search} alt="" />
              Buscar
            </button>
          </div>
        </nav>
        <div className="flex md:hidden items-center gap-6">
          <button className="cursor-pointer p-2 rounded hover:bg-white/20">
            <img className="w-[24px]" src={search} alt="Search" />
          </button>
          <button className="cursor-pointer p-2 rounded hover:bg-white/20">
            <img className="w-[24px]" src={menu} alt="Menu" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
