import { useState } from 'react';
import { Icon } from '../../../../../common';
import { Icons } from '../../../../../common/Icon/Icon';
import { useSearch } from '../../../../../../hooks/useSearch';
// TODO: check classnames

interface Props {
  data: {
    col1: string;
    col2: string;
    search: string;
    searchBy: string;
  };
}

const enum Filter {
  FROM = 'FROM',
  TO = 'TO',
}

const Search = ({ data: { col1, col2, search, searchBy } }: Props) => {
  const [current, setCurrent] = useState(Filter.FROM);
  const { query, addQuery } = useSearch();

  useEffect(() => {
    !dataLoading && console.log('hay amk:', data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLoading]);

  return (
    <>
      <div className="p-4">
        <div className="mb-5 flex">
          <h5 className="text-white text-base md:text-lg font-medium pr-3 md:pr-4">
            {searchBy}
          </h5>
          <button
            type="button"
            onClick={() => setCurrent(Filter.FROM)}
            className={`mr-2 md:mr-4 px-3 py-2 text-xs font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300 ${
              current === Filter.FROM
                ? 'text-white bg-gray-700 hover:bg-gray-800'
                : current === Filter.TO &&
                  'text-gray-800 bg-white hover:bg-slate-100'
            }`}
          >
            {col1.toLocaleUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setCurrent(Filter.TO)}
            className={`px-3 py-2 text-xs font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300 ${
              current === Filter.TO
                ? 'text-white bg-gray-700 hover:bg-gray-800'
                : current === Filter.FROM &&
                  'text-gray-800 bg-white hover:bg-slate-100'
            }`}
          >
            {col2.toLocaleUpperCase()}
          </button>
        </div>
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
            value={query}
            onChange={(event) => addQuery(event.target.value)}
            className="bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-50 focus:border-cyan-50 block w-80 pl-10 p-2.5"
            placeholder={search}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
