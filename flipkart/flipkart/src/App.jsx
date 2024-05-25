import UserSignup from "./pages/User/userSignup/userSignup";
import UserLogin from "./pages/User/userLogin/userLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellerSignUp from "./pages/Seller/sellerSignup/sellerSignup";
import SellerLogin from "./pages/Seller/sellerLogin/sellerLogin";
import Footer from "./components/Common/Footer/footer";
import Header from "./components/Common/Header/header";
import Category from "./components/User/userHome/category/category";
import Banner from "./components/User/userHome/banner/banner";
import UserHome from "./pages/User/userHome/userHome";
import Grocery from "./components/User/userHome/grocery/grocery";
import SellerAddProduct from "./pages/Seller/sellerAddProductDashboard/sellerAddProduct";
import SellerDashboardHeader from "./components/Seller/sellerdashboard/header/header";
import { AdminOverview } from "./pages/Admin/overview/overview";
import Customers from "./pages/Admin/navbar/customers/customers";
import AdminHeader from "./components/Admin/header/header";
import Integration from "./pages/Admin/navbar/integration/integration";
import Account from "./pages/Admin/navbar/account/account"
import Settings from "./pages/Admin/navbar/settings/settings"
import Admindashboard from "./pages/Admin/adminDashboard/admindashboard";
import Sidebar from "./components/Admin/sidebar/sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes> 
        {/* <UserSignup/> */}
        {/* <UserLogin/> */}
        <Route path="/admin" element={<Admindashboard/>}/>
        <Route path="/user/signup" element={<UserSignup/>}/>
        <Route path="/user/login" element={<UserLogin/>}/>
        <Route path="/seller/signup" element={<SellerSignUp/>}/>
        <Route path="/seller/login" element={<SellerLogin/>}/>
        <Route path="/home" element={<UserHome/>}/>
        <Route path="/grocery" element={<Grocery/>}/>
        <Route path="/seller/dashboard" element={<SellerDashboardHeader/>}/>
        <Route path="/seller" element={<SellerAddProduct/>}/>
        <Route path="/AdminHeader" element={<AdminHeader/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
            {/* <Route path="/overview" element={<AdminOverview/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/integration" element={<Integration/>}/>
            <Route path="/account" element={<Account/>}/> */}
            {/* <Route path="/settings" element={<Settings/>}/> */}
        {/* <SellerAddProduct/> */}
        {/* <Header/> */}
        {/* <Banner/> */}
        {/* <Category/> */}
        {/* <Footer/> */}
       </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
