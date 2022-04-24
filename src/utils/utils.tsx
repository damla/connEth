// TODO: refactor this file

import { LANGUAGES_DATA } from './constants';

// merge conditional classes in styling
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
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

export const getNotificationText = (locale: string) => {
  let notification;

  switch (locale) {
    case Languages.ENGLISH:
      notification =
        'Please visit the website with an available Metamask Wallet';
      break;
    case Languages.TURKISH:
      notification =
        'Lütfen Metamask cüzdanınız ile beraber siteyi ziyaret edin';
      break;
    default:
      notification =
        'Please visit the website with an available Metamask Wallet';
      break;
  }

  return notification;
};

export const getLabel = (currentLocale: string) => {
  if (currentLocale === 'en') {
    return LANGUAGES_DATA.filter((l) => l.value === currentLocale)[0].label.en;
  } else {
    return LANGUAGES_DATA.filter((l) => l.value === currentLocale)[0].label.tr;
  }
};

export const decimalFormatter = new Intl.NumberFormat('en-us', {
  style: 'decimal',
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 4,
});

export const limitDecimals = (value: number) => decimalFormatter.format(value);

export const tokenValue = (value: number, decimals: number) =>
  value / Math.pow(10, decimals);

export const tokenValueTxt = (
  value: number | string,
  decimals: number,
  symbol: string
) => {
  if (typeof value === 'number') {
    return `${limitDecimals(tokenValue(value, decimals))} ${symbol}`;
  }

  return `${limitDecimals(tokenValue(Number(value), decimals))} ${symbol}`;
};

// shorten full hash value
export const getEllipsesText = (address: string) => {
  return address.slice(0, 5) + '...' + address.slice(-4);
};

// format string to camel case
export const toLocaleCamelCase = (str: string) => {
  const initial = str.slice(0, 1).toLocaleUpperCase();
  const rest = str.slice(1).toLocaleLowerCase();

  return initial + rest;
};
