/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/global.css';
import UserProvider from '../context/userContext';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
