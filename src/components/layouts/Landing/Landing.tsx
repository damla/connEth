import Head from 'next/head';
import { Nav, Main, Footer } from './modules';

type Props = {
  children: React.ReactNode;
};

const Landing = ({ children }: Props) => (
  <>
    <Head>
      <title>Create Next App | Home</title>
      <meta
        name="description"
        content="NextJS starter created for developers"
      />
    </Head>
    <div className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </div>
  </>
);

export default Landing;
