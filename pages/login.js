import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import Input from '../components/Input'
import FormErrors from '../components/FormErrors'
import Button from '../components/Button'
import Heading from '../components/Heading'
import FormPane from '../components/FormPane'
import { saveToken, guestsOnly } from '../services/TokenService'
import { useAuth } from '../services/AuthContext'
import { redirect } from '../services/NavService'
import { APIRequest } from '../services/APIRequestService'
import { useTranslation } from 'react-i18next';
import { loginSchema } from '../services/ValidationService'

const Login = () => {

  const [state, dispatch] = useAuth();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t('pages.login.headings.title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormPane>
        <Heading 
          type='h1' 
          text={t('pages.login.headings.h1')}
        />
        <div className="my-4 text-gray-500">
          {t('pages.login.no_account.description')} <Link href='/signup'>{t('pages.login.no_account.link')}</Link>
        </div>
        <div className="mt-8">
          <div className="mt-6">
            <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(values, {
              setSubmitting,
              setFieldError, 
              setStatus,
              resetForm,
              errors,
              touched
            }) => {
              APIRequest('/api/login', 'post', { user: values })
                .then(r => r.json().then(data => ({
                  status: r.status, 
                  body: data,
                  headers: r.headers
                })))
                .then(res => {
                  if (res.status == 200) {
                    saveToken(res.headers.get('Authorization')).then(() => {
                      dispatch({
                        type: 'setAuthDetails',
                        payload: {
                          email: res.body.data.attributes.email,
                        }
                      })
                      setTimeout(() => {
                        toast.success(t('alerts.signed_in'))
                      }, 300);
                      redirect('/');
                    });
                  } else {
                    setStatus(t('forms.errors.email_password_mismatch'));
                    setSubmitting(false);
                  }
                })
                .catch(err => {
                  setStatus(t('forms.errors.server_error'));
                  setSubmitting(false);
                });
            }}
          >
              {({ errors, touched, status, isSubmitting }) => (
                <>
                  <FormErrors status={status} errors={errors} touched={touched} />
                  <Form className="space-y-6">
                    <Input 
                      type="email" 
                      name="email" 
                      label={t('forms.labels.email')}
                      hasError={errors.email && touched.email} 
                    />
                    <Input 
                      type="password" 
                      name="password" 
                      label={t('forms.labels.password')}
                      hasError={errors.password && touched.password} 
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      label={t('pages.login.buttons.submit')} 
                    />
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </FormPane>
    </div>
  )
}

export async function getServerSideProps(context) {
  guestsOnly(context);
  return { props: {} };
}

export default Login

