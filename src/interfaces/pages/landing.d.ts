export interface IMain {
  title: string;
  secondaryTitle: string;
  connectBtn: string;
}

export interface IFooter {
  rights: string;
}

export interface IContent {
  main: IMain;
  footer: IFooter;
}
