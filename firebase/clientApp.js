import { getApps, initializeApp } from 'firebase/app';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.envAUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APPI_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.\nAdd your web app\'s configuration object to firebase-config.js');
  } else {
    console.log('firebase initialized!');
    return config;
  }
}

export default function createFirebaseApp() {
  if (getApps().length <= 0) {
    return initializeApp(getFirebaseConfig());
  }
  return getApps()[0];
}
