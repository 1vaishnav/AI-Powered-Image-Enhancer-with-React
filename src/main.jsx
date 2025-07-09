// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './AuthContext.jsx'; // ✅ Import the Auth Context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Wrap App in AuthProvider */}
      <App />
    </AuthProvider>
  </StrictMode>
);
