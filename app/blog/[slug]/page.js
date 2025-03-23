// 'use client';

import { MDXRemote } from 'next-mdx-remote';

export default function BlogPage({ params }) {
  return (
    <>
      <MDXRemote
        source={`# Welcome to my MDX page!
          
          This is some **bold** and _italics_ text.`}
      />
    </>
  );
}
