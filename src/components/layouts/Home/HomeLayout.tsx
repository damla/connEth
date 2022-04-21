import Head from 'next/head';
import { IContent } from '../../../interfaces/landing';
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
        <title>Create Next App | Home</title>
        <meta
          name="description"
          content="NextJS starter created for developers"
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

{
  /* <Link href="/" locale="en">
        <a className="pl-2">EN</a>
      </Link>
      <span> | </span>
      <Link href="/" locale="tr">
        <a>TR</a>
      </Link> */
}
