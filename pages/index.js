import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useUser } from '../context/userContext';

export default function Disney() {
  const { user, loadingUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(loadingUser || user)) {
      console.log(loadingUser);
      console.log('pushing to login');
      console.log(!user);
      router.push('/login');
    } else if (!loadingUser && user) {
      console.log(user);
      router.push('/home');
    }
  }, [user, loadingUser]);
  return (
    <div />
  );
}
