import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { MoralisProvider } from 'react-moralis';
import { APP_ID, SERVER_URL } from '../utils/constants';
import { ErrorProvider, SearchProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      'Missing Moralis Application ID or Server URL. Make sure to set your .env file.'
    );

  return (
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <ErrorProvider>
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </ErrorProvider>
    </MoralisProvider>
  );
}

export default MyApp;
