import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { notFound } from 'next/navigation';

import { loadPost } from '@/app/lib/posts';

export default async function BlogPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = loadPost(slug);
  } catch (e) {
    notFound();
  }

  // const options = {
  //   parseFrontmatter: true,
  // };

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={post} options={{ parseFrontmatter: true }} />
    </article>
  );
}
