import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAI0M3ufZsQJfBoIzC1M_um0xRxoRiFbtU",
  authDomain: "next-efd55.firebaseapp.com",
  projectId: "next-efd55",
  storageBucket: "next-efd55.appspot.com",
  messagingSenderId: "604843396591",
  appId: "1:604843396591:web:de41fb1a8f18210ab6fa1a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
