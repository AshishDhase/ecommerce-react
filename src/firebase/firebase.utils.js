import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyBf0FyfbZByYfTyyi8d11wkZGEk9c98JmU",
    authDomain: "ecommerce-react-db-daf8a.firebaseapp.com",
    projectId: "ecommerce-react-db-daf8a",
    storageBucket: "ecommerce-react-db-daf8a.appspot.com",
    messagingSenderId: "612810192153",
    appId: "1:612810192153:web:e108118ced93627f060188"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;