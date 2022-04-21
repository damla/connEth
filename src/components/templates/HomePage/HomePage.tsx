// import { useRouter } from 'next/router';
import { IMain } from '../../../interfaces/landing';

interface Props {
  data: IMain;
}

const HomePage = ({ data }: Props) => {
  // const router = useRouter();
  const { title, subtitle } = data;
  return (
    <div className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4 m-20">
      <h3 className="text-lg md:text-xl font-medium text-black">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};
export default HomePage;
