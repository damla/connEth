import Head from 'next/head';
import { IFooter } from '../../../interfaces/landing';
import { Notification } from '../../common';
import { Nav, Main, Footer } from './modules';

interface Props {
  children: React.ReactNode;
  data: IFooter;
}

const Landing = ({ children, data }: Props) => {
  return (
    <>
      <Head>
        <title>ConnEth | Home</title>
        <meta
          name="description"
          content="ConnEth is a dApp, developed for keeping track of the ETH blockchain network."
        />
      </Head>
      <Notification />
      <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-green-400 to-brand md:bg-[url('https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg')]">
        <Nav />
        <Main>{children}</Main>
        <Footer data={data} />
      </div>
    </>
  );
};
export default Landing;
