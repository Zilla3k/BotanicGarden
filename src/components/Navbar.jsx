import logo from './assets/logo.svg';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="hidden md:block text-2xl font-bold text-greendark">
          <a href="/">
            <img src={logo} alt="Logo" width="120px" />
          </a>
        </div>

        <div className="hidden md:flex space-x-8 mx-auto">
          <a href="/" className="text-greenhard hover:text-greenmedium">
            Início
          </a>
          <a href="/pools" className="text-greenhard hover:text-greenmedium">
            Piscinas
          </a>
          <a
            href="/gardening"
            className="text-greenhard hover:text-greenmedium"
          >
            Jardinagem
          </a>
          <a
            href="/solarpanels"
            className="text-greenhard hover:text-greenmedium"
          >
            Placa Solar
          </a>
          <a href="/about" className="text-greenhard hover:text-greenmedium">
            Sobre Nós
          </a>
        </div>

        <button
          className="md:hidden bg-white rounded-full shadow-lg mt-10 fixed p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-greenhard" />
          ) : (
            <Menu className="text-greenhard" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-10 ml-10 fixed bg-white shadow-lg">
          <a
            href="/"
            className="block px-4 py-2 text-greenhard hover:bg-greenlight"
          >
            Início
          </a>
          <a
            href="/pools"
            className="block px-4 py-2 text-greenhard hover:bg-greenlight"
          >
            Piscinas
          </a>
          <a
            href="/gardening"
            className="block px-4 py-2 text-greenhard hover:bg-greenlight"
          >
            Jardinagem
          </a>
          <a
            href="/solarpanels"
            className="block px-4 py-2 text-greenhard hover:bg-greenlight"
          >
            Placa Solar
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-greenhard hover:bg-greenlight"
          >
            Sobre Nós
          </a>
        </div>
      )}
    </nav>
  );
}
