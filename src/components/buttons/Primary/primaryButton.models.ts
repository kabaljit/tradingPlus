import { ITheme } from '../../../theme/provider/models';
import { IBaseButtonProps } from '../Base/baseButton.models';

export interface IPrimaryButton extends IBaseButtonProps {
  loading?: boolean;
  theme: ITheme;
}
