import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Formik, Form } from 'formik';
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import FormErrors from '../components/FormErrors'
import Button from '../components/Button'
import Heading from '../components/Heading'
import FormPane from '../components/FormPane'
import { saveToken, guestsOnly } from '../services/TokenService'
import { useAuth } from '../services/AuthContext'
import { redirect } from '../services/NavService'
import { APIRequest } from '../services/APIRequestService'
import { useTranslation } from 'react-i18next';
import { signupSchema } from '../services/ValidationService'

const Signup = () => {

  const [state, dispatch] = useAuth();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t('pages.signup.headings.title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormPane>
        <Heading 
          type='h1' 
          text={t('pages.signup.headings.h1')}
        />
        <div className="my-4 text-gray-500">
          {t('pages.signup.got_account.description')} <Link href='/login'>{t('pages.signup.got_account.link')}</Link>
        </div>
        <div className="mt-8">
          <div className="mt-6">
            <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={signupSchema}
            onSubmit={(values, {
              setSubmitting,
              setFieldError, 
              setStatus,
              resetForm,
              errors,
              touched
            }) => {
              APIRequest('/api/signup', 'post', { user: values })
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
                      redirect('/');
                    });
                  } else {
                    setStatus('TODO');
                    setSubmitting(false);
                  }
                })
                .catch(err => {
                  setStatus(t('forms.errors.server_error'));
                  setSubmitting(false);
                });
            }}
          >
              {({ values, errors, touched, status, isSubmitting }) => (
                <>
                  <FormErrors 
                    values={values} 
                    status={status} 
                    errors={errors} 
                    touched={touched} 
                  />
                  <Form className="space-y-6">
                    <Input 
                      type="email" 
                      name="email" 
                      label={t('forms.labels.email')}
                      hasError={errors.email && touched.email && values.email} 
                    />
                    <Input 
                      type="password" 
                      name="password" 
                      label={t('forms.labels.password')}
                      hasError={errors.password && touched.password && values.password} 
                    />
                    <Checkbox 
                      name="terms" 
                      type="checkbox"
                      label={t('forms.labels.terms')} 
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      label={t('pages.signup.buttons.submit')} 
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

export default Signup

