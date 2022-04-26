/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useEthTransactions } from '../../hooks/useEthTransactions';
import { SearchContextType } from '../../interfaces/contexts/search';

interface Props {
  children: ReactNode;
}

const searchContextDefaultValues: SearchContextType = {
  query: '',
  dataLoading: true,
  data: [],
  addQuery: () => {},
};

export const SearchContext = createContext<SearchContextType>(
  searchContextDefaultValues
);

export const SearchProvider = ({ children }: Props) => {
  // const { transactions } = useEthTransactions({ offset: 0 });
  const [query, setQuery] = useState<string>(searchContextDefaultValues.query);
  const [dataLoading, setDataLoading] = useState(
    searchContextDefaultValues.dataLoading
  );
  const [data, setData] = useState(searchContextDefaultValues.data);

  // 1
  // const fetchData = useCallback(
  //   async () => {
  //     setDataLoading(true);

  //     transactions && transactions.result && setData([...transactions.result]);

  //     setDataLoading(false);
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [transactions, setDataLoading]
  // );

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // useEffect(() => {
  //   setDataLoading(true);

  //   !isLoading &&
  //     transactions &&
  //     transactions?.result &&
  //     setData(transactions?.result);

  //   setDataLoading(false);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [transactions]);

  //2
  // const searchInFrom = useCallback(
  //   async (query: string) => {
  //     setDataLoading(true);

  //     if (transactions && transactions.result) {
  //       const searchedTransactions = transactions?.result.filter(
  //         (transaction) =>
  //           transaction.from_address
  //             .toLowerCase()
  //             .includes(query.toLowerCase()) ||
  //           transaction.from_address
  //             .toLowerCase()
  //             .replace(' ', '')
  //             .includes(query.toLowerCase())
  //       );
  //       console.log('filtreli:', searchedTransactions);
  //       setData(searchedTransactions);
  //       setDataLoading(false);
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [transactions]
  // );

  // useEffect(() => {
  //   searchInFrom(query);
  // }, [searchInFrom, query]);

  const addQuery = (q: string) => setQuery(q);

  const value = { dataLoading, data, query, addQuery };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
