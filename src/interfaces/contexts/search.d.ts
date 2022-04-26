export type SearchContextType = {
  query: string;
  dataLoading: boolean;
  addQuery: (q: string) => void;
  data: Transaction[];
};
