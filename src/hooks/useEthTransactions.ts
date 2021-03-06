import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { useCallback, useEffect, useState } from 'react';
import { Transactions } from '../interfaces/transactions';

interface Props {
  offset?: number;
}

export const useEthTransactions = ({ offset = 0 }: Props) => {
  const { user } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const ethAddress: string = user?.get('ethAddress') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transactions>();
  // const [page, setPage] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);

  const fetchEthTransaction = useCallback(
    async () => {
      if (Web3Api && ethAddress) {
        try {
          setIsLoading(true);
          // get ETH transactions for a given address
          const ethTransactions: Transactions =
            await Web3Api.account.getTransactions({
              chain: 'rinkeby',
              address: ethAddress,
              offset: offset || 0, // offset is used for pagination
              // limit: 100, // 5 transactions per page
            });
          setTransactions(ethTransactions);
        } catch (error) {
          throw error;
        } finally {
          setIsLoading(false);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Web3Api.account]
  );

  useEffect(() => {
    fetchEthTransaction();

    // transactions?.result &&
    //   transactions?.result.length > 0 &&
    //   setTotalPages(Math.ceil(transactions?.result?.length / 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchEthTransaction]);

  return {
    ethAddress,
    transactions,
    isLoading,
    offset,
    // totalPages,
    // page,
    // setPage,
  };
};
