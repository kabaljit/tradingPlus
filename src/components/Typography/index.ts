import { withTheme } from '../../theme/provider/themeProvider';

import { Paragraph as BareParagraph } from './Typography';
import { Title as BareTitle } from './Typography';

export const P = withTheme(BareParagraph);
export const Title = withTheme(BareTitle);


