import { Style } from 'hono/css';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Script } from '../Script';
import { Layout } from '../components/layouts/Layout';
import { favicocnUrl, getOgImageUrl } from '../lib/meta';

export default jsxRenderer(({ children, title, description }) => {
  return (
    <html lang='ja'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>
        <link rel='icon' href={favicocnUrl} />
        <meta property='og:title' content={title} />
        {description && (
          <meta property='og:description' content={description} />
        )}
        <meta property='og:image' content={getOgImageUrl(title)} />
        <meta name='twitter:site' content='@yajihum' />
        <meta name='twitter:image' content={getOgImageUrl(title)} />
        <meta name='twitter:card' content='summary_large_image' />
        {import.meta.env.PROD ? (
          <link href='/static/assets/style.css' rel='stylesheet' />
        ) : (
          <link href='/app/style.css' rel='stylesheet' />
        )}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap'
          rel='stylesheet'
        />
        <Script src='/app/client.ts' />
        <Style />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
});
