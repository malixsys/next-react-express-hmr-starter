import { fetchUsers, User } from '../../hooks';
import React from 'react';

function User({ user }: { user: User }) {
  return <div className="card">{user.email}</div>;
}
export function Users() {
  const data = React.use(fetchUsers());
  return (
    <div className="cards">
      {data?.users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
