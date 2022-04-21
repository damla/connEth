import Link from 'next/link';
import { IFooter } from '../../../../../interfaces/landing';
import { APP_NAME } from '../../../../../utils/constants';

interface Props {
  data: IFooter;
}

const Footer = ({ data }: Props) => {
  const { rights } = data;
  return (
    <footer className="flex h-24 w-full bg-white drop-shadow-2xl flex-col items-center justify-center p-7 text-center text-xs font-bold tracking-tight text-gray-800 md:flex-row md:p-0 md:text-sm cursor-default">
      <span>{rights}&nbsp; </span>
      <span>2022 © {APP_NAME}</span>
    </footer>
  );
};

export default Footer;
