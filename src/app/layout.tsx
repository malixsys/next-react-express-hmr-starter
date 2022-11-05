import '../styles/semantic/semantic.min.css';
import '../styles/global.css';
import { SidebarContainer } from '../components/root/sidebarContainer';

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/me');
  return res.json();
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getData();
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />

        <meta charSet="utf-8" />
        <title>aZoo.me</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&family=Roboto+Slab:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SidebarContainer user={user}>{children}</SidebarContainer>
      </body>
    </html>
  );
}
