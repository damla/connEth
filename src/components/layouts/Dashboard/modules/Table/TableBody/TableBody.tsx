import { useEthTransactions } from '../../../../../../hooks/useEthTransactions';
import TableRow from '../TableRow/TableRow';

interface Props {
  offset?: number;
}

const TableBody = ({ offset = 0 }: Props) => {
  const { isLoading, transactions } = useEthTransactions({
    offset,
  });

  if (transactions?.result && transactions?.result?.length <= 0)
    return (
      <tbody className="h-40">
        <tr>
          <td className="w-10 px-6 font-medium text-white dark:text-white whitespace-nowrap">
            This address has no related transactions.
          </td>
        </tr>
      </tbody>
    );
  return (
    <tbody>
      {isLoading || !transactions ? (
        <>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Loading...
            </th>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4">loading...</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                loading...
              </a>
            </td>
          </tr>
        </>
      ) : (
        <>
          {transactions?.result?.map((transaction, idx) => {
            return <TableRow key={idx} transaction={transaction} />;
          })}
        </>
      )}
    </tbody>
  );
};

export default TableBody;
