// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxxzZVtnj2cYsg-W04sRACUb35WWkFSdQ",
  authDomain: "pitopferro.firebaseapp.com",
  projectId: "pitopferro",
  storageBucket: "pitopferro.appspot.com",
  messagingSenderId: "64484381839",
  appId: "1:64484381839:web:f5e8c00605b76ec0cb4cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
