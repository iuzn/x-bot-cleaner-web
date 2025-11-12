// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkQSa6xsvT3pXYblUz_a0KTEtXtXF0SN8",
  authDomain: "qr-engine.firebaseapp.com",
  projectId: "qr-engine",
  storageBucket: "qr-engine.firebasestorage.app",
  messagingSenderId: "667085854596",
  appId: "1:667085854596:web:8c8ce4f11df8f0d661afd1",
  measurementId: "G-LE703P9DZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only on client side)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
