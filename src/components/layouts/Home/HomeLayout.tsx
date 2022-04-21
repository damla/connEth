import Head from 'next/head';
import { IContent } from '../../../interfaces/landing';
import { APP_NAME } from '../../../utils/constants';
import { Nav, Main, Footer } from './modules';

interface Props {
  children: React.ReactNode;
  data: IContent;
}

const Landing = ({ children, data }: Props) => {
  const { footer } = data;

  return (
    <>
      <Head>
        <title>{APP_NAME} | Home</title>
        <meta
          name="description"
          content="ConnEth is a dApp, developed for keeping track of the ETH blockchain network."
        />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-green-400 to-brand md:bg-[url('https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg')]">
        <Nav />
        <Main>{children}</Main>
        <Footer data={footer} />
      </div>
    </>
  );
};
export default Landing;

// TODO: ADD LANGUAGE SELECTOR
{
  /* <Link href="/" locale="en">
        <a className="pl-2">EN</a>
      </Link>
      <span> | </span>
      <Link href="/" locale="tr">
        <a>TR</a>
      </Link> */
}
