import { generateI18n } from '../../utils/i18n';

export const i18n = generateI18n('buyScreen', {
  en: {
    payLabel: 'Pay',
    skipPaymentNotice:
      'Payment option is no available for this version. We are going to simulate that we are going a purchase with card',
  },
});
