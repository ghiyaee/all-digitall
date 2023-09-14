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
import { SkeletonTheme } from 'react-loading-skeleton';
import Message from './component/Message';
import Messages from './component/Messages';
import AddressUsers from './component/AddressUsers';
import AddressEdit from './component/AddresseEdit';
import FadeLoader from 'react-spinners/FadeLoader';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    },4000)
  },[])
  return (
    <>
      {isLoading ? (
        <>
          <p
            className="flex flex-col justify-center items-center text-xl h-screen
                                  font-[yekan] text-zinc-700 "
          >
            <p> درحال بارگذاری</p>
            <p> لطفا از مرورگر کروم استفاده کنید</p>
            <FadeLoader color={'#f41d3e'} loading={isLoading} size={100} />
          </p>
        </>
      ) : (
        <div className="flex flex-col justify-between min-h-screen ">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <BrowserRouter>
              <Header />
              <ToastContainer
                position="top-center"
                theme="light"
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
                <Route path="/Message" element={<Message />} />
                <Route path="/Messages" element={<Messages />} />
                <Route path="/AddressUsers" element={<AddressUsers />} />
                <Route path="/AddressEdit" element={<AddressEdit />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </SkeletonTheme>
        </div>
      )}
    </>
  );
}

export default App;
