// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYQINeyWfU9BfOsawqB4jvP-KwgQyO0nk",
  authDomain: "my-netflix-app-e2ac5.firebaseapp.com",
  projectId: "my-netflix-app-e2ac5",
  storageBucket: "my-netflix-app-e2ac5.appspot.com",
  messagingSenderId: "308128316329",
  appId: "1:308128316329:web:cc3605e2c2738b51c522b8",
  measurementId: "G-J34CYQNXHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);