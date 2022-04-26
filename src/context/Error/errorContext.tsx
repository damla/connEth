/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useState } from 'react';
import { IError, ErrorContextType } from '../../interfaces/contexts/error';

interface Props {
  children: ReactNode;
}

const errorContextDefaultValues: ErrorContextType = {
  errors: [],
  addError: () => {},
  clearErrors: () => {},
};

export const ErrorContext = createContext<ErrorContextType>(
  errorContextDefaultValues
);

export const ErrorProvider = ({ children }: Props) => {
  const [errors, setErrors] = useState<IError[]>([]);

  const addError = (error: IError) => {
    const newError: IError = {
      description: error.toString(),
    };
    setErrors([...errors, newError]);
  };

  const clearErrors = () => {
    setErrors([]);
  };

  const value = { errors, addError, clearErrors };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};
