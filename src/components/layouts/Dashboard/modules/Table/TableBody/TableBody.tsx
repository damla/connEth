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

  const { loading: loadingInfo, noDataInformation } = data;

  // TODO: add localization
  const loadingRows = Array.from(
    { length: transactions?.result ? transactions?.result?.length : 0 },
    (_, i) => (
      <tr key={i} className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {loadingInfo}
        </th>
        <td className="px-6 py-4">{loadingInfo}</td>
        <td className="px-6 py-4">{loadingInfo}</td>
        <td className="px-6 py-4">{loadingInfo}</td>
        <td className="px-6 py-4 text-right">{loadingInfo}</td>
      </tr>
    )
  );

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
      {isLoading || !transactions ? (
        <>{loadingRows}</>
      ) : (
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
      )}
    </tbody>
  );
};

export default TableBody;
