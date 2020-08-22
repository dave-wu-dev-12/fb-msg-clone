import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx9njqXCl4BO8byM8hGXgFMlB--43-hJA",
  authDomain: "fb-msg-clone-16e91.firebaseapp.com",
  databaseURL: "https://fb-msg-clone-16e91.firebaseio.com",
  projectId: "fb-msg-clone-16e91",
  storageBucket: "fb-msg-clone-16e91.appspot.com",
  messagingSenderId: "151525644709",
  appId: "1:151525644709:web:513add0efea607ee7bf04c",
};

const firesbaseApp = firebase.initializeApp(firebaseConfig);

const database = firesbaseApp.firestore();

export default database;
