import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserProfile({ id }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get(`/api/users/${id}`).then(r => setUser(r.data));
  }, [id]);

  if (!user) return <div>loading...</div>;
  return <div>{user.name}</div>;
}
