import { jsxRenderer } from 'hono/jsx-renderer';

import { Script } from 'honox/server';
import { Container } from '../components/layouts/Container';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import { Layout } from '../components/layouts/Layout';
import IslandSideBar from '../islands/sideBar';
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
        <Script async src='/app/client.ts' />
      </head>
      <body>
        <Layout>
          <Header>
            <IslandSideBar />
          </Header>
          <Container>{children}</Container>
          <Footer />
        </Layout>
      </body>
    </html>
  );
});
