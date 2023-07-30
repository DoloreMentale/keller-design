import ruLocale from './resources/lang/ru.json'
import enLocale from './resources/lang/en.json'

export default defineI18nConfig(() => ({
  locale: 'ru',
  messages: {
    ru: ruLocale,
    en: enLocale
  },
}))