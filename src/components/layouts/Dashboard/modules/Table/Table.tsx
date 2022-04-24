import { SearchInput, TableBody } from '.';
import { ITable } from '../../../../../interfaces/pages/dashboard';

interface Props {
  data: ITable;
}

const Table = ({ data }: Props) => {
  const { search, col1, col2, col3, col4, ...others } = data;

  return (
    <div className="min-h-full max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-800 dark:to-cyan-800">
        <SearchInput search={search} />
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {col1}
              </th>
              <th scope="col" className="px-6 py-3">
                {col2}
              </th>
              <th scope="col" className="px-6 py-3">
                {col3}
              </th>
              <th scope="col" className="px-6 py-3">
                {col4}
              </th>
              <th scope="col" className="px-6 py-3">
                {/* TODO: LOCALIZE HERE */}
                <span className="sr-only">View More</span>
              </th>
            </tr>
          </thead>
          {/* TODO: pagination */}
          <TableBody data={others} offset={0} />
          {/* offset: 0 - 10 - 20 */}
        </table>
      </div>
    </div>
  );
};

export default Table;
