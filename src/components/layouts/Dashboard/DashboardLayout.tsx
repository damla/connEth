import Head from 'next/head';
import { APP_NAME } from '../../../utils/constants';
import { Header, Main, Footer, Nav } from './modules';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Dashboardlayout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>{APP_NAME} | Dashboard</title>
      <meta
        name="description"
        content="ConnEth dashboard for using utilities"
      />
    </Head>
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Nav />
        <Header title={title} />
      </div>
      <Main>{children}</Main>
      <Footer />
    </div>
  </>
);

export default Dashboardlayout;
