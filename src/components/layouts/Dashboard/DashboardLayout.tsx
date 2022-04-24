import Head from 'next/head';
import { IFooter, IMain, INavbar } from '../../../interfaces/pages/dashboard';

import { Main, Footer, Nav } from './modules';

type Props = {
  children: React.ReactNode;
  data: {
    navbar: INavbar;
    footer: IFooter;
  };
};

const Dashboardlayout = ({ children, data: { navbar, footer } }: Props) => (
  <>
    <Head>
      <title>ConnEth | Dashboard</title>
      <meta
        name="description"
        content="ConnEth dashboard for using utilities"
      />
    </Head>
    <div className="min-h-screen flex flex-col justify-between">
      <Nav data={navbar} />
      <Main>{children}</Main>
      <Footer data={footer} />
    </div>
  </>
);

export default Dashboardlayout;
