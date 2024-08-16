export type KeyValuePair = {
  [key: string]: string;
};

export type Question = {
  id: string;
  text: string;
  options: string[];
  next?: KeyValuePair;
};
