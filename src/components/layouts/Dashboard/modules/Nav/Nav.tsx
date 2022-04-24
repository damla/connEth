import { Disclosure } from '@headlessui/react';
import { useMemo } from 'react';
import { useMoralis } from 'react-moralis';
import { useEthBalance } from '../../../../../hooks/useEthBalance';
import { getEllipsesText } from '../../../../../utils/utils';
import MobileMenu from './MobileMenu/MobileMenu';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import { INavbar } from '../../../../../interfaces/pages/dashboard';

interface Props {
  data: INavbar;
}

const Nav = ({ data }: Props) => {
  const { user } = useMoralis();
  const { formattedBalance, loading } = useEthBalance();
  const ethAddress = user?.get('ethAddress');
  const { balance, loading: balanceLoading } = data;
  const infoBar = [
    {
      name: `💰 ${balance}: ${loading ? balanceLoading : formattedBalance}`,
      href: `https://rinkeby.etherscan.io/address/${ethAddress}`,
      type: 'balance',
    },
  ];

  const ellipsedUserName = useMemo(
    () => ethAddress && getEllipsesText(ethAddress),
    [ethAddress]
  );

  return (
    <Disclosure
      as="nav"
      className="shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      {({ open }) => (
        <>
          <DesktopMenu
            open={open}
            userName={ellipsedUserName}
            infoBar={infoBar}
          />
          <MobileMenu userName={ellipsedUserName} infoBar={infoBar} />
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
