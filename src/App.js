import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Products from './component/Prodcuts';
import Card from './component/Card';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import CheckOut from './component/CheckOut';
import Users from './component/Users';
import Dashboard from './component/Dashboard';
import ProductEdit from './component/ProductEdit';
import Comments from './component/Comments';
import DashboardUser from './component/Dashboarduser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchProduct from './component/SearchProduct';
import SearchItem from './component/SearchItem';
function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <BrowserRouter>
        <Header />
        <ToastContainer
          position="top-center"
          theme="dark"
          className={'text-xl font-bold font-[yekan]'}
          limit={1}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/DashboardUser" element={<DashboardUser />} />
          <Route path="/ProductEdit" element={<ProductEdit />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/SearchProduct" element={<SearchProduct />} />
          <Route path="/SearchItem" element={<SearchItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
