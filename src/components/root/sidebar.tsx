import { useMainContext } from './sidebarContainer';
import Link from 'next/link';
import { Image } from 'semantic-ui-react';

function AnonymousSidebar() {
  return (
    <div className="sidebarMenu">
      <div className="ui visible inverted left vertical sidebar menu">
        <Link href={'/'} className="item logo">
          <Image src="https://beta.azoo.me/static/logo.png" />
        </Link>
        <Link href={'/'} className="item">
          Home
          <i className="home icon"></i>
        </Link>

        <Link href="/login" className="item">
          <i className="sign in icon"></i>
          Login
        </Link>
        <Link href="/search" className="item">
          <i className="search icon"></i>
          Lost / Found Animals
        </Link>
        <Link href="/adoption" className="item">
          <i className="heart icon"></i>
          Adoption
        </Link>
        <a href="https://shop.azoo.me" className="item">
          <i className="arrow down cart icon"></i>
          Shop
        </a>
        <a className="item">
          <i className="globe icon"></i>
          Français
        </a>
        <div className="right menu">
          <Link href="/affiliates" className="item bottom green">
            Find a point of sale
          </Link>
          <Link href="/contact" className="item bottom">
            Contact us
          </Link>
          <Link href="/terms" className="item bottom">
            Terms
          </Link>
          <Link href="/policy" className="item bottom">
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const { user } = useMainContext();
  const { anonymous, loading } = user || { anonymous: true, loading: true };
  if (loading) {
    return <div className="ui visible inverted left vertical sidebar menu">...</div>;
  }
  if (anonymous) {
    return <AnonymousSidebar />;
  }
  return <AnonymousSidebar />;
}
