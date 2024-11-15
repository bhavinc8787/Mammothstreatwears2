import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Login from './components/Login';
import Footer from './components/Footer'; 
import { Provider } from 'react-redux';
import store from './redux/store';
import CategoryPage from './components/CategoryPage';
import Product from './components/Product';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer /> 
    </Router>
  </Provider>
);

export default App;
