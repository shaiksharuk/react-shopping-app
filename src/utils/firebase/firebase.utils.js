import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyCWfqsv1UK2sUZ86QWMgiysXe_bafzYMZM",

  authDomain: "bombay-clothing-db.firebaseapp.com",

  projectId: "bombay-clothing-db",

  storageBucket: "bombay-clothing-db.appspot.com",

  messagingSenderId: "966065769862",

  appId: "1:966065769862:web:581faa87fd55336c0e7007"
};
const firebaseApp = initializeApp(firebaseConfig);
//----------

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuthObject) => {

  const userDocRef = doc(db, 'users', userAuthObject.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuthObject;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    }
    catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}
