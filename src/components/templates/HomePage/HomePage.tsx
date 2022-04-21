// import { useRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { Button, Hero } from 'web3uikit';
// import { TIconType } from 'web3uikit/dist/components/Icon/collection';
// import {
//   IPosition,
//   notifyType,
// } from 'web3uikit/dist/components/Notification/types';
import { IMain } from '../../../interfaces/landing';

interface Props {
  data: IMain;
}

const HomePage = ({ data }: Props) => {
  const { title, connectBtn, loading } = data;
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
    <div className="min-w-full px-7 md:px-40 text-center p-3 flex items-center text-sm">
      <Hero
        align="left"
        backgroundURL="https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg"
        height="520px"
        rounded="20px"
        textColor="#fff"
        title={title}
      >
        <div>
          <Button
            icon="arrowCircleRight"
            isLoading={isAuthenticating}
            loadingText={loading}
            onClick={login}
            text={connectBtn}
            theme="primary"
            size="regular"
            type="button"
          />
        </div>
      </Hero>
    </div>
  );
};
export default HomePage;
