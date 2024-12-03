import { useState, useEffect } from 'react';

import logo from './assets/logo.svg';

export function Navbar() {
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePath(currentPath);
  }, []);

  return (
    <>
      <header className="flex justify-between mr-36 ml-36 mt-5 items-center">
        <div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActivePath('/');
              window.location.href = '/'; 
            }}
          >
            <img src={logo} alt="Logo" width="140px" />
          </a>
        </div>
        <div>
          <nav>
            <ul className="flex gap-8">
              {[
                { name: 'Início', path: '/' },
                { name: 'Piscinas', path: '/pools' },
                { name: 'Jardinagem', path: '/gardening' },
                { name: 'Painéis Solares', path: '/solarpanels' },
                { name: 'Sobre', path: '/about' },
                { name: 'Orçamento', path: '/budget' },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      setActivePath(item.path);
                      window.location.href = item.path;
                    }}
                    className={`relative after:content-[''] after:absolute after:h-[2px] after:bg-black after:bottom-0 after:left-0 after:transition-all after:duration-300 ${
                      activePath === item.path
                        ? 'after:w-full'
                        : 'after:w-0 hover:after:w-full'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <button >
            <a href="/login" className="bg-btn-green text-black py-4 px-9 rounded-full  hover:bg-btn-green-hover transition">
              Acessar conta
            </a>
          </button>
        </div>
      </header>
    </>
  );
}