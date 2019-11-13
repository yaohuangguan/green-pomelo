import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8P4dzR1Is3uQgfIc7wQ0ngmBoQB11cCo",
  authDomain: "green-pomelo.firebaseapp.com",
  databaseURL: "https://green-pomelo.firebaseio.com",
  projectId: "green-pomelo",
  storageBucket: "green-pomelo.appspot.com",
  messagingSenderId: "981916060073",
  appId: "1:981916060073:web:9ef2ffc862ddecc1a39cb8",
  measurementId: "G-S5BNXZ6HXZ"
};

firebase.initializeApp(config);

export const createUser = async (userAuth, additional) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additional
      });
    } catch (error) {
      console.log("here is the error" + error.message);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const googleSignIn = () => auth.signInWithPopup(provider);

export default firebase;
