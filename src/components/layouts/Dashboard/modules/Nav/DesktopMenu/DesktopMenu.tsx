import { Disclosure } from '@headlessui/react';
import { LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '../../../../../common';
import { Icons } from '../../../../../common/Icon/Icon';
import { APP_NAME } from '../../../../../../utils/constants';

interface Props {
  open: boolean;
  userName: string;
  infoBar: {
    name: string;
    href: string;
    type: string;
  }[];
}

function DesktopMenu({ open, userName, infoBar }: Props) {
  const { logout, user } = useMoralis();
  return (
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {infoBar.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime-400 text-green-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
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
                    {userName}
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
  );
}

export default DesktopMenu;
