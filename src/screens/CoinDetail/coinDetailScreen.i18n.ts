import { generateI18n } from '../../utils/i18n';

export const i18n = generateI18n('coinDetailScreen', {
  en: {
    buyLabel: 'Buy',
    sellLabel: 'Sell',
    descriptionLabel: 'Description',
    descriptionNotice:
      "Currently our API doesn't support our coin description.",
    descriptionText:
      'We are planing to add this feature in the V2. Please be patience with us.',
    moreLabel: 'Tap there to find out more about this currency',
    closeLabel: 'Close',
  },
});
