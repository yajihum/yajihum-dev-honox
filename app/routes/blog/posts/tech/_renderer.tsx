import { jsxRenderer } from 'hono/jsx-renderer';
import { Post } from '../../../../components';

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const title = `${frontmatter?.title} | Blog Name`;

  return (
    <Layout title={title} description={frontmatter?.description}>
      <Post tag='tech' frontmatter={frontmatter}>
        {children}
      </Post>
    </Layout>
  );
});
