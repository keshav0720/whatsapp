import { firebase } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ_Ji05A5RuTgdXSQpYcm4N-y43qNecOk",
  authDomain: "whatsapp-2f5d5.firebaseapp.com",
  projectId: "whatsapp-2f5d5",
  storageBucket: "whatsapp-2f5d5.appspot.com",
  messagingSenderId: "44424802113",
  appId: "1:44424802113:web:c8714c2b8ec4788dc93bc0",
  measurementId: "G-9N1BMC2Y38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
