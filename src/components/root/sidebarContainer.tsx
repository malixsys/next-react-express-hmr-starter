'use client';
import { Sidebar } from './sidebar';
import React from 'react';
import { Dropdown, Icon, Image, Menu } from 'semantic-ui-react';
import Link from 'next/link';

const Context = React.createContext({ open: true, toggleSidebar: () => {}, user: { loading: true, anonymous: true } });

export const useMainContext = () => React.useContext(Context);

function TopMenu() {
  return (
    <Menu attached="top" className="mobile-menu" inverted>
      <Dropdown item icon="bars" closeOnEscape floating openOnFocus={false}>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">New</span>

            <Dropdown.Menu>
              <Dropdown.Item>Document</Dropdown.Item>
              <Dropdown.Item>Image</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>Open</Dropdown.Item>
          <Dropdown.Item>Save...</Dropdown.Item>
          <Dropdown.Item>Edit Permissions</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Export</Dropdown.Header>
          <Dropdown.Item>Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Link href={'/'} className="item logo">
          <Image src="https://beta.azoo.me/static/logo.png" />
        </Link>
      </Menu.Menu>
    </Menu>
  );
}

export function SidebarContainer({ user, children }) {
  const [open, setOpen] = React.useState(true);
  const toggleSidebar = () => setOpen((o) => !o);
  return (
    <Context.Provider value={{ open, toggleSidebar, user }}>
      <div className="ui pushable main-content">
        {open && <Sidebar />}
        <div className={open ? 'pusher' : 'pusher closed'}>
          <TopMenu />
          <div className="ui segment basic">{children}</div>
        </div>
      </div>
    </Context.Provider>
  );
}
