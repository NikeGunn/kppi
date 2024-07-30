import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
