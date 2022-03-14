import React, { useState } from 'react';
import "./styles/app.css"
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from './utils/useAuth';

import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Product from './components/ProductsContainer/ProductDetails';
import Products from './pages/Products';
import Promotions from './pages/Promotions';
import LogIn from './pages/LogIn';
import CreateProduct from './pages/CreateProduct';

import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

import AuthContext from './utils/auth-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './pages/Cart';
import { CartProvider } from './utils/Cart-Context';
import TemporaryDrawer from './components/cartProducts/SideCart';

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

  const { token, login, logout, userId, emailT } = useAuth();

  const queryClient = new QueryClient();

  let dashboardRoute = <LogIn />;
  if (token) {
    dashboardRoute = (<CreateProduct />)
  }

  //sideBar toggler
  const [toggle, setToggle] = useState(false);
  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setToggle(open);
      };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AuthContext.Provider value={{
            isLoggedIn: !!token,
            userId: userId,
            email: emailT,
            token: token,
            logIn: login,
            logOut: logout
          }}>
            <QueryClientProvider client={queryClient} contextSharing={true}>
              <CartProvider>
                <NavBar toggleDrawer={toggleDrawer} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="promotions" element={<Promotions />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="news" element={<News />} />
                  <Route path="about" element={<AboutUs />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="products" element={<Products />}>
                    <Route index element={<ProductsContainer />} />
                    <Route path=":category" element={<ProductsContainer />} />
                    <Route path=":category/:product" element={<Product />} />
                  </Route>
                  <Route path="cart" element={<Cart />} />
                  <Route path="admin-dashboard" element={dashboardRoute} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <TemporaryDrawer toggleDrawer={toggleDrawer} toggle={toggle} />
                <Footer />
              </CartProvider>
            </QueryClientProvider>
          </AuthContext.Provider>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
