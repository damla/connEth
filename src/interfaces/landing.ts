export interface INavbar {
  walletBtn: {
    text: string;
    loading: string;
  };
}

export interface IMain {
  title: string;
  subtitle: string;
}

export interface IFooter {
  rights: string;
}

export interface IContent {
  navbar: INavbar;
  main: IMain;
  footer: IFooter;
}
