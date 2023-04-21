
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJ_Ji05A5RuTgdXSQpYcm4N-y43qNecOk",
  authDomain: "whatsapp-2f5d5.firebaseapp.com",
  projectId: "whatsapp-2f5d5",
  storageBucket: "whatsapp-2f5d5.appspot.com",
  messagingSenderId: "44424802113",
  appId: "1:44424802113:web:c8714c2b8ec4788dc93bc0",
};

// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);



const app = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
