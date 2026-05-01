import React, { useState } from 'react';
import { auth, provider } from "../../firebase-config.js";
import { signInWithPopup, signOut } from "firebase/auth";
import "./Login.css";

const Login = ({ user, setUser }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("Logged in as:", result.user.displayName);
    } catch (err) {
      console.error("Login failed:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  // Show user profile if logged in
  if (user) {
    return (
      <div className="login-container">
        <div className="login-card profile-card">
          <div className="profile-header">
            <img 
              src={user.photoURL || "https://via.placeholder.com/100"} 
              alt="Profile" 
              className="profile-avatar"
            />
            <h2 className="profile-name">Welcome!</h2>
            <p className="profile-email">{user.email}</p>
          </div>
          <button 
            onClick={handleLogout} 
            className="logout-btn"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="google-logo">
            <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 0, 0)">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.033-6.053 2.033-4.507 0-8.133-3.693-8.133-8.133s3.627-8.133 8.133-8.133c2.213 0 4.227.853 5.813 2.427l2.827-2.827C19.493 2.4 16.107 0 12.48 0 7.307 0 2.76 2.893 2.76 7.293c0 4.213 3.28 7.653 7.72 7.653 3.613 0 6.107-2.387 6.107-5.707 0-.32-.027-.627-.067-.933H12.48z" fill="#4285F4"/>
                <path d="M2.76 7.293c0-.867.133-1.493.267-2.053H12.48v3.907h6.827c-.333 1.527-1.147 2.76-2.227 3.453v2.827h3.853c2.067-1.92 3.36-4.8 3.36-8.134C23.253 3.36 18.627 0 12.48 0 7.307 0 2.76 2.893 2.76 7.293z" fill="#34A853"/>
                <path d="M12.48 0c2.613 0 4.907.907 6.613 2.427l3.093-3.093C19.493 0 16.107 0 12.48 0 7.307 0 2.76 2.893 2.76 7.293c0 4.213 3.28 7.653 7.72 7.653 3.613 0 6.107-2.387 6.107-5.707 0-.32-.027-.627-.067-.933H12.48V0z" fill="#FBBC05"/>
                <path d="M7.293 14.827V12.04H4.307c-.907 1.533-1.493 3.307-1.493 5.16 0 3.373 2.827 6.16 6.667 6.16 1.867 0 3.467-.533 4.72-1.533l3.307 2.827C18.253 23.64 15.56 24 12.48 24c-4.507 0-8.133-3.693-8.133-8.133 0-1.84.627-3.52 1.493-4.853l-2.453-2.16z" fill="#EA4335"/>
              </g>
            </svg>
          </div>
          <h1 className="login-title">Sign in</h1>
          <p className="login-subtitle">Continue with Google</p>
        </div>

        <div className="login-content">
          <button 
            onClick={handleLogin} 
            className="google-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : (
              <>
                <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.033-6.053 2.033-4.507 0-8.133-3.693-8.133-8.133s3.627-8.133 8.133-8.133c2.213 0 4.227.853 5.813 2.427l2.827-2.827C19.493 2.4 16.107 0 12.48 0 7.307 0 2.76 2.893 2.76 7.293c0 4.213 3.28 7.653 7.72 7.653 3.613 0 6.107-2.387 6.107-5.707 0-.32-.027-.627-.067-.933H12.48z" fill="#4285F4"/>
                  <path d="M2.76 7.293c0-.867.133-1.493.267-2.053H12.48v3.907h6.827c-.333 1.527-1.147 2.76-2.227 3.453v2.827h3.853c2.067-1.92 3.36-4.8 3.36-8.134C23.253 3.36 18.627 0 12.48 0 7.307 0 2.76 2.893 2.76 7.293z" fill="#34A853"/>
                  <path d="M12.48 0c2.613 0 4.907.907 6.613 2.427l3.093-3.093C19.493 0 16.107 0 12.48 0 7.307 0 2.76 2.893 2.76 7.293c0 4.213 3.28 7.653 7.72 7.653 3.613 0 6.107-2.387 6.107-5.707 0-.32-.027-.627-.067-.933H12.48V0z" fill="#FBBC05"/>
                  <path d="M7.293 14.827V12.04H4.307c-.907 1.533-1.493 3.307-1.493 5.16 0 3.373 2.827 6.16 6.667 6.16 1.867 0 3.467-.533 4.72-1.533l3.307 2.827C18.253 23.64 15.56 24 12.48 24c-4.507 0-8.133-3.693-8.133-8.133 0-1.84.627-3.52 1.493-4.853l-2.453-2.16z" fill="#EA4335"/>
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </button>

          {error && (
            <div className="error-message">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="login-footer">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
