import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAhU-o6Q6Dg_B9hkNxZEPdWZXZ3lW4nlZA",
  authDomain: "bedtime-stories-app-60b64.firebaseapp.com",
  projectId: "bedtime-stories-app-60b64",
  storageBucket: "bedtime-stories-app-60b64.appspot.com",
  messagingSenderId: "410797633407",
  appId: "1:410797633407:web:aa553362c6dbb91d14f44a"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();