import { useContext } from 'react';
import { ErrorContext } from '../context/Error/errorContext';

export const useError = () => useContext(ErrorContext);
