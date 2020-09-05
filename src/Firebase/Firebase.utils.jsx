import firebase from "firebase/app"; //pulling the firebase utility library
import "firebase/firestore"; //for accesing database
import "firebase/auth"; //for accesing authentication

const firebaseConfig = {
  apiKey: "AIzaSyCm6eP9IVda4yBYKjCuVHBSnQMXeNslPpA",
  authDomain: "hosted-18e84.firebaseapp.com",
  databaseURL: "https://hosted-18e84.firebaseio.com",
  projectId: "hosted-18e84",
  storageBucket: "hosted-18e84.appspot.com",
  messagingSenderId: "129735202514",
  appId: "1:129735202514:web:3a24721f402953cba6bf0b",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //   console.log(snapShot);
  if (!snapShot.exists && userAuth.email !== null) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(); //exporting because anywhere we can use it for authentication purpose
export const firestore = firebase.firestore(); //same reason as above but for database
const Provider = new firebase.auth.GoogleAuthProvider(); //gives access to google auth library
Provider.setCustomParameters({ prompt: "select_account" }); //it takes some custom params
export const signInWithGoogle = () => auth.signInWithPopup(Provider); //It will allow to signIn with google
export default firebase; //In case we need whole library somewhere
