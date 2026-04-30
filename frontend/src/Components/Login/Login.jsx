import React from 'react';
import { auth, provider } from "../../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import { useState } from 'react';
const Login = ({ setUser }) => {

    // const [user , setUser] = useState(null);
  const handleLogin = async () => {
    try {
      // This triggers the secure Google popup window [cite: 19]
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Save the user data to state
      console.log("Logged in as:", result.user.displayName);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <button 
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;