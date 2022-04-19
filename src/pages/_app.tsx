import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { MoralisProvider } from 'react-moralis';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const APP_ID = process.env.NEXT_PUBLIC_APP_ID;

function MyApp({ Component, pageProps }: AppProps) {
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      'Missing Moralis Application ID or Server URL. Make sure to set your .env file.'
    );

  return (
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
