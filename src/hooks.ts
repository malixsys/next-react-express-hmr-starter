export const fetcher = (url: string) =>
  fetch(process.env.NEXT_PUBLIC_API_BASE_URL + url, { next: { revalidate: 10 } }).then((res) => res.json());

export const fetchPosts = () => fetcher('/api/posts');

export const fetchUsers = () => fetcher('/api/users');

export interface Post {
  id: number;
  title: string;
}

export interface User {
  id: number;
  email: string;
}
