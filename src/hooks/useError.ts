import { useContext } from 'react';
import { ErrorContext } from '../context/Error/errorContext';

// created custom hook
export const useError = () => useContext(ErrorContext);
