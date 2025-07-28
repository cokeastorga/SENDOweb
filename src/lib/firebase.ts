// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDLewjPfcifYtgyfALNU2ioOiUozFrGOR0",
  authDomain: "sendo-7ad96.firebaseapp.com",
  projectId: "sendo-7ad96",
  storageBucket: "sendo-7ad96.firebasestorage.app",
  messagingSenderId: "409276398398",
  appId: "1:409276398398:web:7838ee1e7df50be0f90a6f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
