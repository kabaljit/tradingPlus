import { Currency } from "../../../api/currencies";

export interface DetailScreenParams {
  // Navigation parameters here.
}

export interface DetailScreenFormValues {
  // Formik parameters here.
}

export interface DetailScreenProps extends DetailScreenParams {
}

export interface FormBuyProps{
  currentInfo: Currency
}

export interface FormSellProps{
  currentInfo: Currency
}
export interface BuyValues{
  amount: string;
  price: string;
  purchaseDate: Date;
  purchaseTime: Date;
  total: string;
}

export enum OrderType {
  BUY = "Buy",
  SELL = "Sell",
}

export interface Transaction { 
  amount: number;
  price: number;
  purchaseTime: number;
  total: number;
  finalCurrency: string;
  initialCurrency: string;
  orderType: OrderType;
  receiverId: string;
  senderId: string;
  timestamp: Number
}

export interface FormSellProps{
  currentInfo: Currency
}
