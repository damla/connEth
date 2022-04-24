import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getChain } from 'react-moralis';
import { Transaction } from '../../../../../../interfaces/transactions';
import { tokenValueTxt } from '../../../../../../utils/utils';

interface Props {
  transaction: Transaction;
}

const TableRow = ({ transaction }: Props) => {
  const { locale } = useRouter();
  const eth = useMemo(() => {
    const chainData = getChain('0x4');

    if (!chainData) {
      return null;
    }

    return chainData.nativeCurrency;
  }, []);

  return (
    <tr className="bg-white border-b dark:bg-cyan-800 dark:border-cyan-700 hover:bg-green-50 dark:hover:bg-cyan-600">
      <td
        scope="row"
        className="px-5 py-4 text-gray-900 dark:text-white whitespace-nowrap"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
          href={`https://rinkeby.etherscan.io/address/${transaction.from_address}`}
        >
          {transaction.from_address}
        </a>
      </td>
      <td className="px-5 py-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
          href={`https://rinkeby.etherscan.io/address/${transaction.from_address}`}
        >
          {transaction.to_address}
        </a>
      </td>
      <td className="px-5 py-4">
        {new Date(transaction.block_timestamp).toLocaleString(locale)}
      </td>
      <td className="px-5 py-4">
        {/* TODO: memoize this */}
        {tokenValueTxt(transaction.value, eth ? eth.decimals : 10, 'ETH')}
      </td>
    </tr>
  );
};

export default TableRow;
