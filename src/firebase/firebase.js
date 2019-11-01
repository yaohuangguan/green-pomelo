import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAeU46MJFkpxnW4nqNNUpFJDr3xvPBRoTI",
  authDomain: "pro-db-b412c.firebaseapp.com",
  databaseURL: "https://pro-db-b412c.firebaseio.com",
  projectId: "pro-db-b412c",
  storageBucket: "pro-db-b412c.appspot.com",
  messagingSenderId: "34806085369",
  appId: "1:34806085369:web:63bf0205fcaa17e74d1428",
  measurementId: "G-VTS17DTNTF"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const googleSignIn = () => auth.signInWithRedirect(provider);

export default firebase;
