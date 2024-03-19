import { jsxRenderer } from 'hono/jsx-renderer';
import { Post } from '../../../../components/ui';

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  if (!frontmatter) throw new Error('frontmatter is required');

  return (
    <Layout title={frontmatter.title} description={frontmatter?.description}>
      <Post tag='life' frontmatter={frontmatter}>
        {children}
      </Post>
    </Layout>
  );
});
