import { Post } from '../../hooks';

function Post({ post }: { post: Post }) {
  return <div className="card">{post.title}</div>;
}
export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="cards">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
