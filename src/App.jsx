import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
             <Dashboard/>
          </ProtectedRoute>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
