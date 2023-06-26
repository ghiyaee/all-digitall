import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Products from './component/Prodcuts';
import Card from './component/Card'
function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/Card" element={<Card/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
