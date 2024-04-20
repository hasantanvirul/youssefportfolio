import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import LoadingScreen from './pages/loadingScreen';
import VerticalNavbar from './components/verticalNavbar';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* Display loading screen if loading state is true */}
      {loading && <LoadingScreen />}
      {/* Display Hero section after loading */}
      {!loading && <Home />}
    </div>
  );
}

export default App;