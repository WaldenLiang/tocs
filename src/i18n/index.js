import enUS from './en-us'
import zhCN from './zh-cn'

const langList = {
  'en-us': enUS,
  'zh-cn': zhCN
}

export const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE || 'en-us'
const defaultLang = langList[DEFAULT_LOCALE]

export const getLang = language => {
  return langList[language] || defaultLang
}

export default langList
