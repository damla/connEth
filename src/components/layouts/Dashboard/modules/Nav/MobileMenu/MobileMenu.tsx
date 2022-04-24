import { Disclosure } from '@headlessui/react';
import { LogoutIcon } from '@heroicons/react/outline';
import { useMoralis } from 'react-moralis';
import Image from 'next/image';

interface Props {
  userName: string;
  infoBar: {
    name: string;
    href: string;
    type: string;
  }[];
}

function MobileMenu({ userName, infoBar }: Props) {
  const { logout, user } = useMoralis();
  return (
    <Disclosure.Panel className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {infoBar.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
      <div className="pt-4 pb-3 ">
        <div className="flex items-center px-5"></div>
        <div className="mt-3 px-2 space-y-1">
          {user && (
            <button
              type="button"
              onClick={logout}
              className="flex text-white hover:bg-blue-600 hover:text-gray px-3 py-2 rounded-md items-center"
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
    </Disclosure.Panel>
  );
}

export default MobileMenu;
