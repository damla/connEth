import { IMain } from '../../../interfaces/landing';
import { ConnectWallet } from '../../common';

interface Props {
  data: IMain;
}

const HomePage = ({ data }: Props) => {
  const { title, secondaryTitle, connectBtn } = data;

  return (
    <div className="md:bg-white min-h-full md:rounded-3xl md:shadow-lg min-w-fit">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 md:px-8 md:flex md:flex-col md:items-center md:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl pr-0 md:pr-5 cursor-default">
          <span className="block">{title}</span>
          <span className="block text-white md:text-[#2c80b0c0]">
            {secondaryTitle}
          </span>
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 items-center">
          <ConnectWallet defaultText={connectBtn} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
