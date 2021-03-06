import React, {
  useState, useEffect, createContext, useContext,
} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import createFirebaseApp from '../firebase/clientApp';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    createFirebaseApp();
    const unsubscriber = onAuthStateChanged(getAuth(), async (currentUser) => {
      try {
        if (currentUser) {
          // User is signed in.
          const {
            uid, displayName, email, photoURL,
          } = currentUser;
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({
            uid, displayName, email, photoURL,
          });
        } else setUser(null);
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);
