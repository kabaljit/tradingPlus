import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.locale = Localization.locale;

const t = (namespace: string) => (
  key: i18n.Scope,
  options?: i18n.TranslateOptions
) => i18n.t(`${namespace}-${key}`, options);

export const generateI18n = (
  namespace: string,
  translations: { [key: string]: { [key: string]: string } }
) => {
  for (const language of Object.keys(translations)) {
    if (!i18n.translations[language]) {
      i18n.translations[language] = {};
    }

    const entriesNamespaced: { [key: string]: string } = {};
    for (const key of Object.keys(translations[language])) {
      entriesNamespaced[`${namespace}-${key}`] = translations[language][key];
    }

    Object.assign(i18n.translations[language], entriesNamespaced);
  }

  return { t: t(namespace) };
};
