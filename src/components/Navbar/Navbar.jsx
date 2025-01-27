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
      <section className="relative flex items-center mr-72 ml-72 mt-4">
        <span>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActivePath('/');
              window.location.href = '/';
            }}
          >
            <img src={logo} alt="Logo" width="120px" />
          </a>
        </span>

        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-8 text-greenhard">
            {[
              { name: 'Início', path: '/' },
              { name: 'Piscinas', path: '/pools' },
              { name: 'Jardinagem', path: '/gardening' },
              { name: 'Painéis Solares', path: '/solarpanels' },
              { name: 'Sobre Nós', path: '/about' },
            ].map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePath(item.path);
                    window.location.href = item.path;
                  }}
                  className={`relative after:content-[''] after:absolute after:h-[2px] after:bg-greenhard after:bottom-0 after:left-0 after:transition-all after:duration-300 ${
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
      </section>
    </>
  );
}
