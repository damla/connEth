import { useContext } from 'react';
import { ErrorContext } from '../context';

export const useError = () => useContext(ErrorContext);
