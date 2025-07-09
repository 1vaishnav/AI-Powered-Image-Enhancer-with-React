import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register"; // Make sure this component exists
import { useAuth } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen justify-center bg-gray-100 py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">AI Image Enhancer</h1>
          <p className="text-lg text-gray-500">
            Upload your image and let AI enhance it in seconds!
          </p>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <>
                  <Home />
                  <button
                    onClick={() => signOut(auth)}
                    className="mt-4 text-sm text-red-500 hover:underline"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" replace />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" replace />}
          />
        </Routes>

        <div className="text-sm text-gray-500 mt-6 text-center">
          Powered by <span className="font-semibold">@VaishnaviAI</span>
        </div>
      </div>
    </Router>
  );
}

export default App;
