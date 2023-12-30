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
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
