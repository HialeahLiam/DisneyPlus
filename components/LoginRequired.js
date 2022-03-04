import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useUser } from '../context/userContext';

// eslint-disable-next-line react/prop-types
export default function LoginRequired({ children }) {
  const { user, loadingUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loadingUser && !user) {
      router.push('/login');
    }
  }, [user, loadingUser]);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
}
