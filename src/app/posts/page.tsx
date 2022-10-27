import React from 'react';
import { fetchPosts } from '../../hooks';
import { Posts } from './posts';

const PostsPage = () => {
  const data = React.use(fetchPosts());
  return (
    <section>
      <h1>Posts</h1>
      <Posts posts={data?.posts} />
    </section>
  );
};

export default PostsPage;
