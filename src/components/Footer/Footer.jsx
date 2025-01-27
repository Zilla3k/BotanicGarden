import { Typography } from '@material-tailwind/react';
const links = ['Início', 'Piscinas', 'Jardinagem', 'Painéis Solares', 'Sobre'];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-28">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography
                  as="a"
                  href={
                    ['/', 'pools', 'gardening', 'solarpanels', 'about'][index]
                  }
                  color="white"
                  className="font-medium !text-black transition-colors hover:!text-greenhard"
                >
                  {link}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Bela Flora Botânica
        </Typography>
      </div>
    </footer>
  );
}
