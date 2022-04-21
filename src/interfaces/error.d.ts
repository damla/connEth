export interface IError {
  description: string;
}
export type ErrorContextType = {
  errors: IError[];
  addError: (error: IError) => void;
  clearErrors: () => void;
};
