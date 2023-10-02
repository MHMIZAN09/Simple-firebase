// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZy2ldOJgmhv8tWapUrzU7WfVCKvQGJ9A",
  authDomain: "simple-firebase-ff8da.firebaseapp.com",
  projectId: "simple-firebase-ff8da",
  storageBucket: "simple-firebase-ff8da.appspot.com",
  messagingSenderId: "527523363203",
  appId: "1:527523363203:web:107c28b8ab7138c1fc5eb6",
  measurementId: "G-244XVDEBSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export default app;