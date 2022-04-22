import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { useError } from '../../../hooks/useError';
import { classNames, getConnectWalletTexts } from '../../../utils/utils';
import Icon, { Icons } from '../Icon/Icon';
import Spinner from '../Spinner/Spinner';

interface Props {
  icon?: boolean;
  defaultText?: string;
}

const ConnectWallet = ({ icon, defaultText }: Props) => {
  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();
  const { addError, clearErrors } = useError();

  const router = useRouter();
  const currentLocale = router.locale || 'en';

  const { text, connecting } = getConnectWalletTexts(currentLocale);

  useEffect(() => {
    if (isAuthenticated) router.replace('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated && !isAuthenticating) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          if (!user) throw Error('User is null');
          else {
            console.log(user.get('ethAddress'));
            clearErrors();
            console.log('logged in user:', user);
          }
        })
        .catch(function (err) {
          console.log(err);
          addError(err);
        });
    }
  };

  return (
    <button
      onClick={login}
      disabled={isAuthenticated}
      type="button"
      className={`text-center inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white md:bg-gradient-to-br md:from-blue-600 md:to-green-400 md:hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ${
        (isAuthenticating && classNames('opacity-50', 'cursor-not-allowed'),
        !icon && 'py-4')
      }`}
    >
      <>
        {icon && !isAuthenticating && (
          <Icon icon={Icons.METAMASK} alt="metamask" />
        )}
        <span className={`${icon && 'hidden md:block'}`}>
          {isAuthenticating ? (
            <>
              <Spinner /> {connecting}
            </>
          ) : (
            defaultText ?? text
          )}
        </span>
      </>
    </button>
  );
};

export default ConnectWallet;
