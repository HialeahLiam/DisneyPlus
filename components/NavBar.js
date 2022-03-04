import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getAuth,
  // onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import style from '../styles/NavBar.module.css';
import { useUser } from '../context/userContext';

// eslint-disable-next-line react/prop-types
export default function NavBar() {
  const { user } = useUser();
  const router = useRouter();
  const [dropdown, showDropdown] = useState(false);

  const handleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
      router.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvatarHover = () => {
    showDropdown(true);
  };

  const handleAvatarUnhover = () => {
    showDropdown(false);
  };

  useEffect(() => {
    console.log(`login user: ${user}`);
  }, [user]);

  return (

    <nav className={style.nav}>
      <Link href="/home">
        <a
          className={style.disneyLogo}
        >
          <img
            src="/images/logo.svg"
            alt="disney logo"
          />
        </a>
      </Link>

      {user

        ? (
          <div
            className={style.signOut}
            role="menu"
            tabIndex="0"
            onFocus={handleAvatarHover}
            onBlur={handleAvatarUnhover}
            onMouseOver={handleAvatarHover}
            onMouseLeave={handleAvatarUnhover}
          >
            <div
              className={style.avatar}
            >
              <img
                src={user.photoURL}
                alt="profile"
                referrerPolicy="no-referrer"
                className={style.profilePhoto}
              />
            </div>
            {dropdown && (
            <div
              className={style.profileDropdown}
              onClick={() => { signOut(getAuth()); }}
              role="menuitem"
              tabIndex="0"
              onKeyPress={() => { signOut(getAuth()); }}
            >
              sign out
            </div>
            )}
          </div>
        )

        : (
          <>
            <a href="w" className={style.signUp}> sign up now</a>
            <button
              type="button"
              onClick={handleAuth}
              className={style.login}
            >
              {' '}
              log in
            </button>
          </>
        )}

    </nav>

  );
}
