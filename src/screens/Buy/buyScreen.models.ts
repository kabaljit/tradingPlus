export interface BuyScreenParams {
  ticker: string;
  price: string;
}

export interface BuyScreenFormValues {
  amountToBuy: string;
  ticker: string;
}

export interface BuyScreenProps extends BuyScreenParams {}

export interface SaveDataType {
  [key: string]: NewPurchaseType;
}

export interface NewPurchaseType {
  price: number;
  amount: number;
  ticker: string;
  total: number;
}
