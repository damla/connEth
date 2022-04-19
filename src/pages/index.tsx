import type { NextPage } from 'next';
import { Landing } from '../components/layouts';
import { HomePage } from '../components/templates';

const Home: NextPage = () => {
  return (
    <Landing>
      <HomePage />
    </Landing>
  );
};

export default Home;
