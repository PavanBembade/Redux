import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/buttons/Login";
import PrivateRoutes from "./components/privateRoute/PrivateRoutes";
import Signup from "./components/buttons/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
