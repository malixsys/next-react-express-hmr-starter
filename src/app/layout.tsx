import '../components/global.css';
import Sidebar from '../components/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <main className="main">
          <Sidebar />
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
