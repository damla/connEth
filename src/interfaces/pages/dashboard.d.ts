export interface INavbar {
  balance: string;
  loading: string;
}

export interface ITable {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  loading: string;
  noDataInformation: string;
  search: string;
}

export interface IMain {
  title: string;

  table: ITable;
}

export interface IFooter {
  rights: string;
}

export interface IContent {
  navbar: INavbar;
  main: IMain;
  footer: IFooter;
}
