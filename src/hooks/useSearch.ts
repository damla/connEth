import { useContext } from 'react';
import { SearchContext } from '../context';

export const useSearch = () => useContext(SearchContext);
