export type KeyValuePair = {
  [key: string]: string;
};

type State = 'NY' | 'CA';

export type Question = {
  id: string;
  text: string;
  options: string[];
  state?: State;
  next?: KeyValuePair;
};
