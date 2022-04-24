import { useMemo } from 'react';
import { getChain } from 'react-moralis';
import { Transaction } from '../../../../../../interfaces/transactions';
import { tokenValueTxt } from '../../../../../../utils/utils';

interface Props {
  transaction: Transaction;
  isLoading: boolean;
}

const TableRow = ({ transaction, isLoading }: Props) => {
  const eth = useMemo(() => {
    const chainData = getChain('0x4');

    if (!chainData) {
      return null;
    }

    return chainData.nativeCurrency;
  }, []);

  return (
    <tr className="bg-green-50 border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-100 dark:hover:bg-cyan-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {isLoading ? 'Loading...' : transaction.from_address}
      </th>
      <td className="px-6 py-4">{transaction.to_address}</td>
      <td className="px-6 py-4">
        {isLoading ? 'Loading...' : transaction.block_timestamp}
      </td>
      <td className="px-6 py-4">
        {isLoading
          ? 'Loading...'
          : tokenValueTxt(
              transaction.value,
              eth ? eth.decimals : 10,
              eth ? eth.symbol : 'ETH'
            )}
      </td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
