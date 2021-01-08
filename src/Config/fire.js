import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAA3TvSOrcNxTSJHWchi4l-77lWnyzVo7s",
    authDomain: "athena-academy-50911.firebaseapp.com",
    projectId: "athena-academy-50911",
    storageBucket: "athena-academy-50911.appspot.com",
    messagingSenderId: "1098129362025",
    appId: "1:1098129362025:web:476c58b1bfe8e9d333e6f8"
  };

  firebase.initializeApp(firebaseConfig);

  const provider = new firebase.auth.GoogleAuthProvider();
  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };