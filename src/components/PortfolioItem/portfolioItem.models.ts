export interface PortfolioItemProps {
  title: string;
  amount?: number;
  currentValue?: number;
  price: number;
  logoUrl: string; 
  onPress: () => void;
}
