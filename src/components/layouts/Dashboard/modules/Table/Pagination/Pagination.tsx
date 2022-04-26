import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';

function Pagination() {
  return (
    <ul className="inline-flex items-center -space-x-px">
      <li>
        <a
          href="#"
          className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous</span>
          <ArrowLeftIcon className="w-5 h-5" />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        >
          1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          2
        </a>
      </li>
      <li>
        <a
          href="#"
          className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          3
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Next</span>
          <ArrowRightIcon className="w-5 h-5" />
        </a>
      </li>
    </ul>
  );
}

export default Pagination;
