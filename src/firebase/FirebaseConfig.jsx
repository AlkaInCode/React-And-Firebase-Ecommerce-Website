// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAts0iQ4GYGAsHRjsCc_D_POS2Di7mYcc",
  authDomain: "myecom-5589e.firebaseapp.com",
  projectId: "myecom-5589e",
  storageBucket: "myecom-5589e.appspot.com",
  messagingSenderId: "518470573850",
  appId: "1:518470573850:web:4e0ee13c370dbe9e2396a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }