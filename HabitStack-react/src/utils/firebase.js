// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  //   collection,
  //   writeBatch,
  //   query,
  //   getDocs,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMgWJAeKkMGHU_8an2atm3hnh-1MTZNY",
  authDomain: "habitappreact.firebaseapp.com",
  projectId: "habitappreact",
  storageBucket: "habitappreact.appspot.com",
  messagingSenderId: "1765239085",
  appId: "1:1765239085:web:4ec23c42f87d7dcd43cba4",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize firebase authentication
export const auth = getAuth(firebaseApp);

// Google Popup Auth Functionality
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Email and Password Auth Functionality
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Initialize Firestore Database
export const db = getFirestore();

// Create User Doc Upon SignUp
export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userDocRef;
};

export const signOutUser = async () => await signOut(auth);
