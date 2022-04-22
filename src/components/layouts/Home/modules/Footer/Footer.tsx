import { IFooter } from '../../../../../interfaces/landing';
import { APP_NAME } from '../../../../../utils/constants';
import { LanguageSelector } from '../../../../common';

interface Props {
  data: IFooter;
}

const Footer = ({ data }: Props) => {
  const { rights } = data;
  return (
    <footer className="flex h-24 w-full bg-white drop-shadow-2xl flex-col items-center justify-between md:justify-between p-7 text-center text-xs font-bold tracking-tight text-gray-800 md:flex-row md:px-40 md:text-sm cursor-default">
      <div className="flex flex-col md:flex-row md:p-0">
        <span>{rights}&nbsp; </span>
        <span>2022 © {APP_NAME}</span>
      </div>
      <div className="flex">
        <LanguageSelector />
      </div>
    </footer>
  );
};

export default Footer;
