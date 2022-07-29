import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout"
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route } from "react-router-dom";

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/checkout" element={<Checkout/>}/>

  </Routes>
  </BrowserRouter>

}

export default App;