import Link from 'next/link';

const Footer = () => (
  <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div className="sm:flex sm:items-center sm:justify-between">
      <ul className="flex items-center mb-6 text-sm sm:mb-0">
        <Link href="/">
          <a className="text-xl font-semibold whitespace-nowrap dark:text-white">
            NextJS Starter
          </a>
        </Link>
      </ul>
      <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {new Date().getFullYear()}{' '}
      <Link href="/">
        <a className="hover:underline">NextJS Starter</a>
      </Link>
      . All Rights Reserved.
    </span>
  </footer>
);

export default Footer;
