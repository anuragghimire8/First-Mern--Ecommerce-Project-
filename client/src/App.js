import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgetPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Homestore from './pages/Homestore'
import CreateProduct from "./pages/Admin/CreateProduct";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import CreateCategory from "./pages/Admin/CreateCatgeory";
import Products from "./pages/Admin/Product";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from './pages/Search'
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/product/:slug' element={<ProductDetails/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route  path='/category/:slug' element={<CategoryProduct/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path="/dashboard" element={<PrivateRoute />}>

          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
        
        <Route path='admin' element={<AdminDashboard/>}/>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory/>} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/product/:slug" element={<UpdateProduct />} />
     
        <Route path="admin/orders" element={<AdminOrders/>} />
        </Route>
        <Route path="/register" element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPasssword/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/homestore" element={<Homestore/>}/> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;