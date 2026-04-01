// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDF0XwtXKHyPNo1ylmWEv_NjsNIAnYAKk",
  authDomain: "my-ai-quiz-34ce6.firebaseapp.com",
  projectId: "my-ai-quiz-34ce6",
  storageBucket: "my-ai-quiz-34ce6.firebasestorage.app",
  messagingSenderId: "1094126483824",
  appId: "1:1094126483824:web:ffb616d7b612ba23e877b5",
  measurementId: "G-MJPSS4W8YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();