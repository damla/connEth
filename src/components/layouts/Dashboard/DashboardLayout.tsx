import Head from 'next/head';
import { Main, Footer, Nav } from './modules';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Dashboardlayout = ({ children }: Props) => (
  <>
    <Head>
      <title>ConnEth | Dashboard</title>
      <meta
        name="description"
        content="ConnEth dashboard for using utilities"
      />
    </Head>
    <div className="min-h-screen flex flex-col justify-between">
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </div>
  </>
);

export default Dashboardlayout;
