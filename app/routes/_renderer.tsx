import { jsxRenderer } from 'hono/jsx-renderer';
import { Script } from 'honox/server';
import { Layout } from '../components/common/layouts/Layout';

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang='ja'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>
        {import.meta.env.PROD ? (
          <link href='static/assets/style.css' rel='stylesheet' />
        ) : (
          <link href='/app/style.css' rel='stylesheet' />
        )}
        <Script src='/app/client.ts' async />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
});
