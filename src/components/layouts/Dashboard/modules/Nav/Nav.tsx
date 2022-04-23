import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useMoralis } from 'react-moralis';
import { useEthBalance } from '../../../../../hooks/useEthBalance';
import { APP_NAME } from '../../../../../utils/constants';
import { getEllipsesText } from '../../../../../utils/utils';
import { Icon } from '../../../../common';
import { Icons } from '../../../../common/Icon/Icon';

const Nav = () => {
  const { isAuthenticated, logout, user } = useMoralis();
  const { formattedBalance, loading } = useEthBalance();
  const router = useRouter();
  const ethAddress = user?.get('ethAddress');

  const navigation = [
    { name: '🧾 Transactions', href: '#' },
    { name: '💰 Balance', href: '#' },
  ];

  // TODO: implement menu
  // const userNavigation = [
  //   // { name: 'Your Profile', href: '#' },
  //   { name: user && getEllipsesText(user?.get('ethAddress')), href: '#' },
  //   { name: 'Sign out', href: '#' },
  // ];

  useEffect(() => {
    if (!isAuthenticated) router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const ellipsedUserName = useMemo(
    () => ethAddress && getEllipsesText(ethAddress),
    [ethAddress]
  );

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a className="hover:cursor-pointer inline-flex sm:mb-0 text-white hover:opacity-80 text-xl font-bold items-center">
                      <Icon icon={Icons.ETHEREUM_WHITE} alt="ethereum" />
                      {APP_NAME}
                    </a>
                  </Link>
                </div>
                {!loading && formattedBalance}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-white hover:bg-blue-500 hover:text-gray px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6"></div>
                <div className="flex">
                  {user && (
                    <button
                      type="button"
                      onClick={logout}
                      className="flex text-white hover:bg-cyan-500 hover:text-gray px-3 py-2 rounded-md items-center"
                    >
                      <Image
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                        src="https://avatars.githubusercontent.com/u/24878421?s=48&v=4"
                        alt="Rounded avatar"
                      />
                      <div className="flex items-center">
                        <span className="px-4 text-sm font-medium inline-flex items-center">
                          {ellipsedUserName}
                        </span>
                        <LogoutIcon className="w-6 h-6 text-white" />
                      </div>
                    </button>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-cyan-300 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-50 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-white hover:bg-blue-600 hover:text-gray block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 ">
              <div className="flex items-center px-5"></div>
              <div className="mt-3 px-2 space-y-1">
                <Disclosure.Button className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600">
                  {user && getEllipsesText(user?.get('ethAddress'))}
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
