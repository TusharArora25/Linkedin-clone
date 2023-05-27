import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA3dFJTZ5h8Y_HMbHcjRtWJ0pSLkRoDrXg",
    authDomain: "linkedin-clone-ta.firebaseapp.com",
    projectId: "linkedin-clone-ta",
    storageBucket: "linkedin-clone-ta.appspot.com",
    messagingSenderId: "757464577941",
    appId: "1:757464577941:web:996e8cec57a190bd6f689c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };