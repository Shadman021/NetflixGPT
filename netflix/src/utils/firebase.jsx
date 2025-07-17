// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRMTYZmjngAZ1EyUTW4iqAe0L6XZK_zyo",
  authDomain: "netflixgpt-37fd2.firebaseapp.com",
  projectId: "netflixgpt-37fd2",
  storageBucket: "netflixgpt-37fd2.firebasestorage.app",
  messagingSenderId: "844083044932",
  appId: "1:844083044932:web:b50067ccc1329007b85211",
  measurementId: "G-Y8ZGVT6JSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);