import { useState } from "react";
import "./App.css";
import Operations from "./Components/Operation/Operation";
import Login from "./Components/Login/Login";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  if (!user) {
    return <Login user={user} setUser={setUser} />;
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h1>AI Dashboard</h1>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item active">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-2h6v2zm4-4H6v-2h10v2zm0-4H6V7h10v2z"/>
            </svg>
            Calculator
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <img 
              src={user.photoURL || "https://via.placeholder.com/40"} 
              alt="Profile" 
              className="user-avatar"
            />
            <div className="user-details">
              <h3>{user.displayName}</h3>
              <p>{user.email}</p>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="page-header">
          <h2>Calculator</h2>
          <p>Perform basic mathematical operations</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <div className="card-title">
                <div className="card-title-icon green">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-2h6v2zm4-4H6v-2h10v2zm0-4H6V7h10v2z"/>
                  </svg>
                </div>
                <h3>Operations</h3>
              </div>
            </div>
            <div className="card-body">
              <Operations />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
