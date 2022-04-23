import { useEffect } from 'react';
import { useEthTransactions } from '../../../../../../hooks/useEthTransactions';
import TableRow from '../TableRow/TableRow';

interface Props {
  offset?: number;
}

const TableBody = ({ offset = 0 }: Props) => {
  const { isLoading, transactions } = useEthTransactions({
    offset,
  });

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  return (
    <tbody>
      {!isLoading &&
        transactions?.result?.map((transaction, idx) => {
          return (
            <TableRow
              key={idx}
              transaction={transaction}
              isLoading={isLoading}
            />
          );
        })}
    </tbody>
  );
};

export default TableBody;
