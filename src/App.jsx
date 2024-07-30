import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} /> {/* Handle 404 errors */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
