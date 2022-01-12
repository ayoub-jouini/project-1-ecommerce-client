import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Promotions from './pages/Promotions';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="blog" element={<Blog />} />
          <Route path="news" element={<News />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/:category" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
