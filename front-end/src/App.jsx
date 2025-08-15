import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import Product from "./pages/Product";
import Carrinho from "./components/Carrinho";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      <Carrinho />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
