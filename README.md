# 😴 Boring Bits: Nextjs Edition

**A Nextjs template with all the Boring Bits™ you need to build an API-powered frontend.** 

It's not glamourous. It's not sexy. It's just a dependably Boring starting point for your next frontend.

Plays nicely with [Boring Bits: Rails API Edition](https://github.com/jameschambers/boring-bits-rails-api).

## Highlights

- Authentication with client-side JWT validation
- Login, signup, and protected routes
- [Formik](https://formik.org/) forms with [Yup validation](https://github.com/jquense/yup)
- Toast alerts with [react-toastify](https://github.com/fkhadra/react-toastify)
- [Storybook](https://storybook.js.org/)
- [Tailwind CSS](https://tailwindcss.com)

![Boring Login Screen](https://img.jame.sc/boring-bits-nextjs-screenshot.png)

## Nextjs and storybook setup

Clone the repo and install dependencies with `yarn`. 

Run Nextjs with:  

```
$ yarn dev
```

And storybook with:

```
$ storybook
```

That's it. In the app you've got a login form, a signup form, and a protected route. You'll also find storybook running with your basic UI components. The rest - as they say - is up to you.

## Connect to an API

Authentication itself happens through an API (e.g. if you're in the market, check out this [Rails API template](https://jameschambers.co.uk/rails-api). Whatever solution you use, you'll need to add the same JWT key you use on the server to your `.env.local`. file (see below). Note that all client-side ENV variables must be prefixed with `NEXT_PUBLIC_`.

```
# .env.local
NEXT_PUBLIC_JWT_SECRET_KEY=some-secret
NEXT_PUBLIC_API_URL=http://localhost:3001
```
