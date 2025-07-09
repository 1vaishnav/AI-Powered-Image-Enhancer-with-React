// src/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ✅ Your actual Firebase config (keep API key in .env for production)
const firebaseConfig = {
  apiKey: "AIzaSyDGZUSKVk3SLtyquNFUYcL2MAcmNQmpXBs",
  authDomain: "react-9e8fa.firebaseapp.com",
  projectId: "react-9e8fa",
  storageBucket: "react-9e8fa.appspot.com",
  messagingSenderId: "935230167169",
  appId: "1:1234567890:web:abc123def456", // <- example appId
};

// ✅ Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Export Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
