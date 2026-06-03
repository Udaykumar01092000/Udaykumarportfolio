This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Email Setup

The contact form now sends submissions through SMTP and clears all fields after a successful send.

1. Copy `.env.example` to `.env.local`.
2. Fill in your SMTP credentials.
3. For Gmail, use an App Password instead of your normal account password.
4. Restart the dev server after adding the environment variables.

The main variables are:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_FORM_TO_EMAIL=udaykumar.77348@gmail.com
CONTACT_FORM_FROM_EMAIL=your-email@gmail.com
```

### Netlify production setup

If the live site shows `The contact form is not configured yet. Please try again later.`, the API route is running but one or more SMTP variables are missing in production.

1. Open your site in Netlify.
2. Go to `Site configuration` -> `Environment variables`.
3. Add the same variables you use in `.env.local`:
   `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_FORM_TO_EMAIL`, and `CONTACT_FORM_FROM_EMAIL`.
4. Make sure the variable scope includes `Functions`.
5. Trigger a fresh deploy after saving the variables.

`.env.local` only works on your local machine. Netlify does not automatically read that file from your computer for deployed functions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
