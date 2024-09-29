export interface Result<T> {
    value: T;
    isSuccess: boolean;
    message?: string;
    statusCode: number;
  }