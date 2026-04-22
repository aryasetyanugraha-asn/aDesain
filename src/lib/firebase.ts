import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// Replace these with your actual Firebase project config later
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForNowPleaseReplaceMe",
  authDomain: "adesain-portal.firebaseapp.com",
  projectId: "adesain-portal",
  storageBucket: "adesain-portal.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
