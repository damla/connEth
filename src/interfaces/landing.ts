// TODO: delete this if it is not used
export interface INavbar {
  error: string;
  walletBtn: {
    text: string;
    loading: string;
  };
}

export interface IMain {
  title: string;
  secondaryTitle: string;
  connectBtn: string;
}

export interface IFooter {
  rights: string;
}

export interface IContent {
  navbar: INavbar;
  main: IMain;
  footer: IFooter;
}
