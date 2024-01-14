import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import RequireAuth from './features/auth/RequireAuth';
import Wishlist from './pages/Wishlist'

import { PersistGate } from 'redux-persist/integration/react';
import Book from './pages/Book';

function App() {

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const body = document.body;
  if (isDarkMode) {
    body.style.backgroundColor = "#202124"
    body.style.color = "white"
  }
  else {
    body.style.backgroundColor = "#f8f8f8"
    body.color = "black"
  }

  return (
    <div className="App m-4">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>

            {/* public routes */}

            <Route index element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* private routes */}

            <Route element={<RequireAuth />} >

              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/book" element={<Book />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/wishlist" element={<Wishlist />} />

            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
