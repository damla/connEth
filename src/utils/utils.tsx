// merge conditional classes in styling
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

// format string to camel case
export const toLocaleCamelCase = (str: string) => {
  const initial = str.slice(0, 1).toLocaleUpperCase();
  const rest = str.slice(1).toLocaleLowerCase();

  return initial + rest;
};

// shorten full hash value
export const getEllipsesText = (address: string) => {
  return address.slice(0, 5) + '...' + address.slice(-4);
};

// common content according to language selected
enum Languages {
  ENGLISH = 'en',
  TURKISH = 'tr',
}

export const getConnectWalletTexts = (locale: string) => {
  let textValues;

  switch (locale) {
    case Languages.ENGLISH:
      textValues = {
        text: 'Connect with MetaMask',
        connecting: 'Connecting...',
      };
      break;
    case Languages.TURKISH:
      textValues = {
        text: 'MetaMask ile Bağlan',
        connecting: 'Bağlanıyor...',
      };
      break;
    default:
      textValues = {
        text: 'Connect with MetaMask',
        connecting: 'Connecting...',
      };
      break;
  }

  return textValues;
};
