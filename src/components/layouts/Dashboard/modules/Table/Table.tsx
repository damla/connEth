import { Pagination, Search, TableBody } from '.';
import { ITable } from '../../../../../interfaces/pages/dashboard';

interface Props {
  data: ITable;
}

const Table = ({ data }: Props) => {
  const { search, col1, col2, col3, col4, searchBy, ...others } = data;

  return (
    <div className="min-h-full max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="relative overflow-x-auto mb-5 shadow-lg sm:rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
        {/* TODO: search */}
        <Search data={{ col1, col2, search, searchBy }} />
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase">
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
                <span className="sr-only">More Information</span>
              </th>
            </tr>
          </thead>
          <TableBody data={others} />
        </table>
      </div>
      {/* TODO: pagination */}
      <Pagination />
    </div>
  );
};

export default Table;
