export interface INavbar {
  error: string;
  walletBtn: {
    text: string;
    loading: string;
  };
}

export interface IMain {
  title: string;
  connectBtn: string;
  error: string;
  loading: string;
}

export interface IFooter {
  rights: string;
}

export interface IContent {
  navbar: INavbar;
  main: IMain;
  footer: IFooter;
}
