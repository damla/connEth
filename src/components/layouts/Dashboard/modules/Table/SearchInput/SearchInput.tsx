import { Icon } from '../../../../../common';
import { Icons } from '../../../../../common/Icon/Icon';

const SearchInput = () => {
  return (
    <div className="p-4">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon icon={Icons.SEARCH} alt="search" />
        </div>
        <input
          type="text"
          id="table-search"
          className="bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-50 focus:border-cyan-50 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-50 dark:focus:border-cyan-50"
          placeholder="Search for transaction"
        />
      </div>
    </div>
  );
};

export default SearchInput;
