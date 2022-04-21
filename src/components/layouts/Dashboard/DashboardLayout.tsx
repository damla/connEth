import Head from 'next/head';
import { Header, Main, Footer, Nav } from './modules';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Dashboardlayout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>Create Next App | Dashboard</title>
      <meta
        name="description"
        content="NextJS starter created for developers"
      />
    </Head>
    <div className="min-h-full">
      <Nav />
      <Header title={title} />
      <Main>{children}</Main>
      <Footer />
    </div>
  </>
);

export default Dashboardlayout;
