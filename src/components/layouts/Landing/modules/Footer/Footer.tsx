import Link from 'next/link';
import { Footer } from '../../../../../interfaces/page';

interface Props {
  data: Footer;
}

const Footer = ({ data }: Props) => {
  const { rights } = data;
  return (
    <footer className="flex h-24 w-full flex-col items-center justify-center border-t p-7 text-center text-xs font-medium tracking-tight text-gray-700 md:flex-row md:p-0 md:text-sm">
      <span>{rights}&nbsp; </span>
      <span>2022 © NextJS Starter</span>

      <Link href="/" locale="en">
        <a className="pl-2">EN</a>
      </Link>
      <span> | </span>
      <Link href="/" locale="tr">
        <a>TR</a>
      </Link>
    </footer>
  );
};

export default Footer;
