// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPNzn-iO5jvatYjreOYluTsSVKIKGRZlg",
  authDomain: "resturent-webapp.firebaseapp.com",
  projectId: "resturent-webapp",
  storageBucket: "resturent-webapp.appspot.com",
  messagingSenderId: "419354885496",
  appId: "1:419354885496:web:ae22a5abe1fc1135d59c8d",
  measurementId: "G-9W8DNEWL32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
