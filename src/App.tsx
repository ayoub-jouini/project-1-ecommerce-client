import React from 'react';

import "./styles/app.css"

import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Products from './pages/Products';
import Promotions from './pages/Promotions';

import NavBar from './components/NavBar';

interface Theme {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
    }
    secondary: {
      main: string;
      light: string;
      dark: string;
    }
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#30475e",
      light: "#5c728b",
      dark: "#032034",
    },
    secondary: {
      main: "#c1a57b",
      light: "#f5d6aa",
      dark: "#90764e",
    }
  }
});

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="promotions" element={<Promotions />} />
            <Route path="blog" element={<Blog />} />
            <Route path="news" element={<News />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products/:category" element={<Products />} />
            <Route path="products/:category/:product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
