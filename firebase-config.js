// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeypsz6MylUOKfNHwiegFzD9zd9ei3BYo",
  authDomain: "mxpert-865b7.firebaseapp.com",
  projectId: "mxpert-865b7",
  storageBucket: "mxpert-865b7.appspot.com",
  messagingSenderId: "413435023049",
  appId: "1:413435023049:web:0fa57870d3c6eb3bc14718",
  measurementId: "G-JBQ6DJEVGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export the auth object for use in other files
export { auth };
