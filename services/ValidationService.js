import { useTranslation } from 'react-i18next';
import * as Yup from 'yup'
import i18n from '../services/I18nService';

export const loginSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email(i18n.t('forms.errors.email.invalid')).required(i18n.t('forms.errors.email.required')),
    password: Yup.string().required(i18n.t('forms.errors.password.required')),
  })
}

export const signupSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email(i18n.t('forms.errors.email.invalid')).required(i18n.t('forms.errors.email.required')),
    password: Yup.string().required(i18n.t('forms.errors.password.required')).min(8, i18n.t('forms.errors.password.length')),
    terms: Yup.bool().oneOf([true], i18n.t('forms.errors.terms.required'))
  })
}
