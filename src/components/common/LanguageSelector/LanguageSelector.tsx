import { Menu, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { Fragment } from 'react';

const LanguageSelector = () => {
  // const [selectedLang, setSelectedLang] = useState([
  //   { value: 'en', label: 'English', current: true },
  //   { value: 'tr', label: 'Turkish', current: false },
  // ]);

  return (
    <div className="w-28 text-left">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Languages
          <ChevronUpIcon
            className="w-5 h-5 ml-2 -mr-1 text-cyan-100 hover:text-cyan-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-50"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-50"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 bottom-10 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link href="/" locale="en">
                  <a className="font-bold hover:bg-cyan-500 active:bg-cyan-500 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    🇬🇧 EN
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/" locale="tr">
                  <a className="font-bold hover:bg-cyan-500 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    🇹🇷 TR
                  </a>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default LanguageSelector;
