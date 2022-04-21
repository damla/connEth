import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { Button } from 'web3uikit';
import { INavbar } from '../../../../../interfaces/landing';

export interface Props {
  data: INavbar;
}

const Nav = ({
  data: {
    walletBtn: { text, loading },
  },
}: Props) => {
  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();
  const router = useRouter();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (isAuthenticated) router.replace('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          console.log(user!.get('ethAddress'));
          console.log('logged in user:', user);
        })
        .catch(function (error) {
          setError(error);
        });
    }
  };

  return (
    <>
      {error && (
        <div className="px-7 text-center p-3 min-w-full flex items-center justify-center bg-gray-500 text-white shadow-sm text-sm md:text-md font-medium">
          Please visit the website with an available Metamask Wallet
        </div>
      )}
      <nav className="container flex min-w-full items-center justify-between p-7 md:px-40">
        <span className=" text-gray-900 text-xl font-bold hover:cursor-default">
          NextJS Starter
        </span>
        <Button
          color="green"
          icon="eth"
          id="test-button-primary"
          isLoading={isAuthenticating}
          loadingText={loading}
          onClick={login}
          text={text}
          theme="secondary"
          type="button"
        />
      </nav>
    </>
  );
};

export default Nav;
