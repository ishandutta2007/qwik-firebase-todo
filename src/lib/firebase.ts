import { isBrowser } from '@builder.io/qwik/build';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup as _signInWithPopup, type Auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// import your .env variable
// PUBLIC_FIREBASE_CONFIG={YOUR FIREBASE CONFIG}
// make sure the Firebase keys are in Quotes ""
const firebase_config = JSON.parse(
    import.meta.env.PUBLIC_FIREBASE_CONFIG
);

// initialize firebase
export const app = getApps().length
    ? getApp()
    : initializeApp(firebase_config);

export const db = getFirestore(app);
export const auth = (isBrowser ? getAuth(app) : null) as Auth;

