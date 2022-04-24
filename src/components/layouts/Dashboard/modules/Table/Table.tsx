import { SearchInput, TableBody } from '.';

const Table = () => (
  <div className="min-h-full max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-800 dark:to-cyan-800">
      <SearchInput />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              FROM
            </th>
            <th scope="col" className="px-6 py-3">
              TO
            </th>
            <th scope="col" className="px-6 py-3">
              DATE
            </th>
            <th scope="col" className="px-6 py-3">
              VALUE
            </th>
            {/* <th scope="col" className="px-6 py-3">
              <span className="sr-only">View More</span>
            </th> */}
          </tr>
        </thead>
        {/* TODO: pagination */}
        <TableBody offset={0} />
      </table>
    </div>
  </div>
);

export default Table;
