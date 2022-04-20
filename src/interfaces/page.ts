export interface Main {
  title: string;
  subtitle: string;
}

export interface Footer {
  rights: string;
}

export interface Content {
  navbar: string;
  main: Main;
  footer: Footer;
}
