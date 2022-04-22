import { Menu, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { LANGUAGES_DATA } from '../../../utils/constants';
import { getLabel } from '../../../utils/utils';
import MyLink from '../MyLink/MyLink';

const LanguageSelector = () => {
  const router = useRouter();
  const currentLocale = router.locale || 'en';
  const label = getLabel(currentLocale);

  return (
    <div className="text-left">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-800 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="inline-flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <>
              {label}
              <ChevronUpIcon
                className="w-5 h-5 ml-2 -mr-1 text-gray-800"
                aria-hidden="true"
              />
            </>
          </span>
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
          <Menu.Items className="absolute left-0 bottom-14 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {LANGUAGES_DATA.map(({ value, label }, idx) => {
                return (
                  <Menu.Item key={idx}>
                    <MyLink
                      href="/"
                      locale={value}
                      className="font-bold hover:bg-teal-400 active:bg-teal-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                    >
                      {currentLocale === 'en' ? label.en : label.tr}
                    </MyLink>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default LanguageSelector;
