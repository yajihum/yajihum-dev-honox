import { Style } from 'hono/css';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Script } from 'honox/server';
import { Layout } from '../components/layouts/Layout';

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang='ja'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title ? `${title} | yajihum.dev` : 'yajihum.dev'}</title>
        {import.meta.env.PROD ? (
          <link href='static/assets/style.css' rel='stylesheet' />
        ) : (
          <link href='/app/style.css' rel='stylesheet' />
        )}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' CrossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap'
          rel='stylesheet'
        />
        <Script src='/app/client.ts' async />
        <Style />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
});
