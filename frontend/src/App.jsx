import { useState } from "react";
import "./App.css";
import Operations from "./Components/Operation/Operation";
import Login from "./Components/Login/Login";
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        // 2. CRITICAL: You must add setUser={setUser} here [cite: 107, 109]
        <Login setUser={setUser} />
      ) : (
        <h1>Welcome, {user.displayName}</h1>
      )}
    </div>
  );
}
export default App;
