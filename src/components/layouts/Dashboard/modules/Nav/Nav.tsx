import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { Avatar, PopoverElement } from 'web3uikit';
import { getEllipsesText } from '../../../../../utils/utils';

const Nav = () => {
  const { isAuthenticated, logout, user } = useMoralis();
  const router = useRouter();

  const navigation = [
    { name: '🧾 Transactions', href: '#' },
    { name: '💰 Balance', href: '#' },
  ];

  const userNavigation = [
    // { name: 'Your Profile', href: '#' },
    { name: user && getEllipsesText(user?.get('ethAddress')), href: '#' },
    { name: 'Sign out', href: '#' },
  ];

  useEffect(() => {
    if (!isAuthenticated) router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a className="hover:cursor-pointer hover:text-gray-300 text-white text-xl font-bold">
                      NextJS Starter
                    </a>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-white hover:bg-gray-700 hover:text-gray px-3 py-2 rounded-md text-sm font-medium"
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
                    <>
                      <div className="flex text-white hover:bg-gray-700 hover:text-gray px-3 py-2 rounded-md items-center hover:cursor-default">
                        <Avatar
                          isRounded
                          avatarKey={Math.floor(Math.random() * 100)}
                          text={user?.get('ethAddress').slice(0, 2)}
                          theme="letters"
                        />
                        <div className="flex flex-col justify-end">
                          <span className="px-4 text-base font-medium inline-flex items-center">
                            {getEllipsesText(user?.get('ethAddress'))}
                          </span>
                          <PopoverElement
                            icon="logOut"
                            iconColor="white"
                            onClick={logout}
                            text="Logout"
                            textSize={13}
                            textColor="white"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
                  className="text-white hover:bg-gray-700 hover:text-gray block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5"></div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
