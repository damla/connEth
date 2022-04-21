import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
// import { TIconType } from 'web3uikit/dist/components/Icon/collection';
// import {
//   IPosition,
//   notifyType,
// } from 'web3uikit/dist/components/Notification/types';
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
  // const dispatch = useNotification();

  useEffect(() => {
    if (isAuthenticated) router.replace('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // const handleNewNotification = (
  //   type: notifyType,
  //   icon?: TIconType,
  //   position?: IPosition
  // ) => {
  //   dispatch({
  //     type,
  //     message: error,
  //     title: router.locale === 'en' ? 'Error' : 'Hata',
  //     icon,
  //     position: position || 'topL',
  //   });
  // };

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          console.log(user!.get('ethAddress'));
          console.log('logged in user:', user);
        })
        .catch(function (err) {
          console.log(err);
          // handleNewNotification('info');
        });
    }
  };

  return (
    <nav className="container flex flex-wrap min-w-full items-center justify-between p-7 md:px-40">
      <span className="mb-3 sm:mb-0 text-gray-900 text-xl font-bold hover:cursor-default">
        NextJS Starter
      </span>
      {/* <Button
        color="green"
        icon="eth"
        id="test-button-primary"
        isLoading={isAuthenticating}
        loadingText={loading}
        loadingProps={{ spinnerColor: '#ada9a9' }}
        onClick={login}
        text={text}
        theme="secondary"
        type="button"
      /> */}
    </nav>
  );
};

export default Nav;
