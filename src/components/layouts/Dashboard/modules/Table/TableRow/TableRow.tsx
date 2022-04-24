import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getChain } from 'react-moralis';
import { Transaction } from '../../../../../../interfaces/transactions';
import { RINKEBY_URL } from '../../../../../../utils/constants';
import { tokenValueTxt } from '../../../../../../utils/utils';

interface Props {
  transaction: Transaction;
  address?: string;
}

const TableRow = ({ transaction, address }: Props) => {
  const { locale } = useRouter();

  const eth = useMemo(() => {
    const chainData = getChain('0x4');

    if (!chainData) {
      return null;
    }

    return chainData.nativeCurrency;
  }, []);

  return (
    <tr className="bg-white border-b">
      <td
        scope="row"
        className="px-5 py-4 text-gray-900 dark:text-white whitespace-nowrap"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
          href={`${RINKEBY_URL}${transaction.from_address}`}
        >
          {transaction.from_address}
        </a>
      </td>
      <td className="px-5 py-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
          href={`${RINKEBY_URL}${transaction.to_address}`}
        >
          {transaction.to_address}
        </a>
      </td>
      <td className="px-5 py-4">
        {new Date(transaction.block_timestamp).toLocaleString(locale)}
      </td>
      <td className="px-5 py-4">
        {tokenValueTxt(transaction.value, eth ? eth.decimals : 10, 'ETH')}
      </td>
      <td className="px-5 py-4 text-right">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
          href={`${RINKEBY_URL}${address}`}
        >
          {locale === 'en' ? 'more information' : 'daha fazla bilgi'}
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
