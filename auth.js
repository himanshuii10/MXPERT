import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Login Function
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        window.location.href = "4.html";
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });
}

// Sign-up Function
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("Signup form submitted."); // Debugging

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Attempting to create user:", email); // Debugging

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully:", userCredential.user); // Debugging
      alert("Sign-up successful! You can now log in.");
      window.location.href = "2.html"; // Redirect to login page
    } catch (error) {
      console.error("Sign-up error:", error);
      alert("Error: " + error.message);
    }
  });
}

