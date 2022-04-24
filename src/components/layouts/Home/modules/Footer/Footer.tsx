import { IFooter } from '../../../../../interfaces/pages/landing';
import { APP_NAME } from '../../../../../utils/constants';
import { LanguageSelector } from '../../../../common';

interface Props {
  data: IFooter;
}

const Footer = ({ data }: Props) => {
  const { rights } = data;
  return (
    <footer className="cursor-default flex w-full bg-white drop-shadow-2xl flex-col-reverse items-center justify-center p-7 text-center text-xs font-bold tracking-tight text-gray-800 md:justify-between md:flex-row md:px-40 md:text-sm">
      <div className="flex flex-col md:flex-row md:p-0">
        <span>{rights}&nbsp; </span>
        <span>2022 © {APP_NAME}</span>
      </div>
      <div className="mb-5 md:mb-0">
        <LanguageSelector />
      </div>
    </footer>
  );
};

export default Footer;
