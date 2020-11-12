import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "forms.labels.email": "Email address",
      "forms.labels.password": "Password",
      "forms.labels.terms": "I agree to the Terms of Service and Privacy statement",
      "forms.errors.server_error": "We couldn't connect to the server. We've been alerted to the problem, and are working on a fix. Please try again soon.",
      "forms.errors.title": "There's a problem:",
      "forms.errors.email.invalid": "Invalid email address",
      "forms.errors.email.required": "Email is required",
      "forms.errors.terms.required": "Please accept the terms & conditions",
      "forms.errors.password.required": "Password is required",
      "forms.errors.password.length": "Password must be 8 or more characters",
      "forms.errors.email_password_mismatch": "We couldn't find an account for that email & password. Are they both correct?",
      "alerts.signed_in": "👋 Welcome back!",
      "forms.buttons.submit": "Submit",
      "pages.signup.headings.title": "Sign up",
      "pages.signup.headings.h1": "Create a new account",
      "pages.signup.got_account.description": "Got an account?",
      "pages.signup.buttons.submit": "Sign up",
      "pages.signup.got_account.link": "Sign in",
      "pages.login.headings.title": "Sign in",
      "pages.login.headings.h1": "Sign in to your account",
      "pages.login.buttons.submit": "Sign in",
      "pages.login.no_account.description": "Don't have an account?",
      "pages.login.no_account.link": "Sign up",
      "pages.login.forgot_password_link": "Forgot password?",
    }
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
