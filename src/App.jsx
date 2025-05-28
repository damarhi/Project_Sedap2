import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./Pages/Dashboard"))
const Orders = React.lazy(() => import("./Pages/Orders"))
const Products = React.lazy(() => import("./Pages/Products"))
const Customer = React.lazy(() => import("./Pages/Customer"))
const Error400 = React.lazy(() => import("./Pages/Error400"))
const Error401 = React.lazy(() => import("./Pages/Error401"))
const Error403 = React.lazy(() => import("./Pages/Error403"))
const Error404 = React.lazy(() => import("./Pages/Error404"))
const ListUser = React.lazy(() => import("./Pages/ListUser"))
const Register = React.lazy(() => import("./Pages/auth/Register"))
const Forgot = React.lazy(() => import("./Pages/auth/Forgot"))
const MainLayout = React.lazy(() => import("./Layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./Layouts/AuthLayout"))
const GuestLayout = React.lazy(() => import("./Layouts/GuestLayout"))
const ErrorLayout = React.lazy(() => import("./Layouts/ErrorLayout"))
const Login = React.lazy(() => import("./Pages/auth/Login"))
const Loading = React.lazy(() => import("./components/Loading"))
 const ProductDetail = React.lazy(() => import("./Pages/ProductDetail"))
import Home from "./Pages/Guest/Home";
import Cekproduk from "./Pages/Guest/Cekproduk";
import "./assets/tailwind.css";


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
            
              <Route element={<MainLayout/>}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Orders" element={<Orders />} />
                <Route path="/Customer" element={<Customer />} />
                <Route path="/ListUser" element={<ListUser />} />
                <Route path="products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} /> 
              </Route>
              <Route element={<AuthLayout/>}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/forgot" element={<Forgot/>} />
              </Route>
              <Route element={<GuestLayout/>}>
                <Route path="/home" element={<Home />} />               
                <Route path="/cekproduk" element={<Cekproduk />} />               
              </Route>
             
              <Route path="/Error400" element={<Error400 />} />
                <Route path="/Error401" element={<Error401 />} />
                <Route path="/Error403" element={<Error403 />} />
                <Route path="*" element={<Error404 />} />
         
            </Routes>
    </Suspense>      
 )}
    
export default App;
