'use client';
import React from 'react';
import { Button, Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import { useMainContext } from './root/sidebarContainer';

export const HomePage = () => {
  const { toggleSidebar, open, user } = useMainContext();
  return (
    <Segment raised loading={!user || user.loading}>
      <Header>Home</Header>
      <Button primary onClick={toggleSidebar}>
        {open ? 'close' : 'open'}
      </Button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Segment>
  );
};
