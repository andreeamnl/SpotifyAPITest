import React, { useState , useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Playlist from './components/Playlist/Playlist';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import './App.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAbout, setShowAbout] = useState(false);

//   const toggleAbout = () => {
//     setShowAbout(prevState => !prevState);
//   };
  
//   const checkLoginStatus = () => {
//     const accessToken = localStorage.getItem('token');
//     if (accessToken) {
//       setIsLoggedIn(true);
//       console.log("is ogged in");
//     } else {
//       setIsLoggedIn(false);
//     }
//   };

//   useEffect(() => {
//     checkLoginStatus();
//     const intervalId = setInterval(() => {
//       checkLoginStatus();
//     }, 5000); 
//     return () => clearInterval(intervalId);
//   },[]);

//   return (
//     <Router>
//       <div className="App">
//       <Navbar toggleAbout={toggleAbout} />
//       {showAbout && <About />}
//         <Routes>
//           <Route path="/SpotifyAPITest" element={isLoggedIn ?<Playlist /> : <Login />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


// export default App;


function App() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(prevState => !prevState);
  };
 
  return (
    <div className="App">
      <Navbar toggleAbout={toggleAbout} />
      {showAbout && <About />}
      <Playlist />
      <Footer />
    </div>
  );
}

export default App;
