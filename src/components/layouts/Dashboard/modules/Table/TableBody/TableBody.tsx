import { useEthTransactions } from '../../../../../../hooks/useEthTransactions';
import TableRow from '../TableRow/TableRow';

interface Props {
  offset?: number;
  data: {
    loading: string;
    noDataInformation: string;
  };
}

const TableBody = ({ offset = 0, data }: Props) => {
  const { isLoading, transactions, ethAddress } = useEthTransactions({
    offset,
  });

  const { loading, noDataInformation } = data;

  if (isLoading || !transactions) {
    return (
      <tbody className="h-40">
        <tr>
          <td className="w-10 px-6 font-medium text-white dark:text-white whitespace-nowrap">
            {loading}
          </td>
        </tr>
      </tbody>
    );
  }

  if (transactions?.result && transactions?.result?.length <= 0)
    return (
      <tbody className="h-40">
        <tr>
          <td className="w-10 px-6 font-medium text-white dark:text-white whitespace-nowrap">
            {noDataInformation}
          </td>
        </tr>
      </tbody>
    );
  return (
    <tbody>
      <>
        {transactions?.result?.map((transaction, idx) => {
          return (
            <TableRow
              key={idx}
              transaction={transaction}
              address={ethAddress}
            />
          );
        })}
      </>
    </tbody>
  );
};

export default TableBody;
