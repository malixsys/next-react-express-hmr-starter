import Link from 'next/link';
import './sidebar.css';

export default function Sidebar() {
  return (
    <nav className={'nav'}>
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
