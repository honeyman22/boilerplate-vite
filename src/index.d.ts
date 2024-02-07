type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

type APIResponse<T> = {
  success: string;
  data: T;
  message?: string;
  docs?: Docs;
  others?: object;
};
