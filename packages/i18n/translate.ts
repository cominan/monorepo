import i18n from './config/i18n';
import { I18nKeys } from './type';

export const translate = (key: I18nKeys, option?: Record<string, unknown>) => {
  return key ? i18n.t(key, option) : '';
};
