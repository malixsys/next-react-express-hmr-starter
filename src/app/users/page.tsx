import React from 'react';
import { Users } from './users';
import Loading from './loading';

const UsersPage = () => {
  return (
    <section>
      <h1>Users</h1>
      <React.Suspense fallback={<Loading />}>
        <Users />
      </React.Suspense>
    </section>
  );
};

export default UsersPage;
