import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';
import { VerifyOfficeToken } from './components/Auth/VerifyToken';

const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./components/Auth/Login'));
const MaidDetails = lazy(() => import('./components/Maid-Details/Maid-Details'));

function App() {
  const officeToken = VerifyOfficeToken();

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={officeToken ? <Home /> : <Login />} />
          <Route path="/login" element={officeToken ? <Home /> : <Login />} />
          <Route path="/details/:maidID" element={officeToken ? <MaidDetails /> : <Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
