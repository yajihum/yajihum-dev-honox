import { jsxRenderer } from 'hono/jsx-renderer';
import { Post } from '../../../../components';

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  if (!frontmatter) throw new Error('frontmatter is required');

  return (
    <Layout title={frontmatter.title} description={frontmatter?.description}>
      <Post tag='tech' frontmatter={frontmatter}>
        {children}
      </Post>
    </Layout>
  );
});
