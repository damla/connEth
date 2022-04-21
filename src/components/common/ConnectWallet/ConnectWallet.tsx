import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { classNames, getConnectWalletTexts } from '../../../utils/utils';
import Icon, { Icons } from '../Icon/Icon';

interface Props {
  icon?: boolean;
  defaultText?: string;
}

const ConnectWallet = ({ icon, defaultText }: Props) => {
  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();

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
          console.log(user!.get('ethAddress'));
          console.log('logged in user:', user);
        })
        .catch(function (err) {
          console.log(err);
          // TODO: error notification for non-wallet users
        });
    }
  };

  return (
    <button
      onClick={login}
      disabled={isAuthenticated}
      type="button"
      className={`border focus:ring-4 focus:outline-none font-medium btn rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#2B85B0] bg-[#2B85B0] border-[#2B85B0] hover:border-gray-800 text-white hover:bg-gray-700 ${
        isAuthenticating && classNames('opacity-50', 'cursor-not-allowed')
      }`}
    >
      <>
        {icon && <Icon icon={Icons.METAMASK} alt="metamask" />}
        <span className={`${icon && 'hidden md:block'}`}>
          {isAuthenticating ? connecting : defaultText ? defaultText : text}
        </span>
      </>
    </button>
  );
};

export default ConnectWallet;
