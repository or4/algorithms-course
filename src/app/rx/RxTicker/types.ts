export interface ServerRate {
  id: number;
  last: string;
  lowestAsk: string;
  highestBid: string;
  percentChange: string;
  baseVolume: string;
  quoteVolume: string;
  isFrozen: string;
  high24hr: string;
  low24hr: string;
}

export interface ServerRates {
  [key: string]: ServerRate;
}

export interface Rate {
  id: number;
  name: string;
  last: string;
  highestBid: string;
  percentChange: string;
}

export interface Optional<T> {
  value: T;
  error?: any;
}
