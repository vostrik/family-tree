import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'

import en from './locales/en/translation.json'
import ru from './locales/ru/translation.json'

const initI18next = async (lng: string = 'en') => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: en
        },
        ru: {
          translation: ru
        }
      },
      lng,
      supportedLngs: ['en', 'ru'],
      fallbackLng: 'ru',
      fallbackNS: 'translation',
      defaultNS: 'translation',
      ns: 'translation',
      interpolation: {
        escapeValue: false
      }
    })
  return i18nInstance
}

export async function useTranslation (lng: string) {
  const i18nextInstance = await initI18next(lng)
  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance
  }
}