import Head from 'next/head';
import { IContent } from '../../../interfaces/landing';
import { Nav, Main, Footer } from './modules';

interface Props {
  children: React.ReactNode;
  data: IContent;
}

const Landing = ({ children, data }: Props) => {
  const { navbar, footer } = data;

  return (
    <>
      <Head>
        <title>Create Next App | Home</title>
        <meta
          name="description"
          content="NextJS starter created for developers"
        />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-between bg-white">
        <Nav data={navbar} />
        <Main>{children}</Main>
        <Footer data={footer} />
      </div>
    </>
  );
};
export default Landing;
