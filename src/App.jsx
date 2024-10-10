import React from "react";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import {Outlet, RouterProvider, ScrollRestoration, createBrowserRouter} from "react-router-dom"
import Footer from "./components/footer/Footer";
import Cart from "./pages/Cart";
import { productsData } from "./api/api";
import { perfumery } from "./api/brands/perfumery";
import ProductDetail from "./components/productDetail/ProductDetail";
import Login from "./pages/Login";

const Layout = ()=> {
  return(
    <>
      <Header/>
      <ScrollRestoration/> 
      <Outlet/>
      <Footer/>
    </>
  )
}

const makeRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: async () => {
          const [productsDataResponse, perfumeryResponse] = await Promise.all([
            productsData(),
            perfumery()
          ]);
          console.log(productsDataResponse.data);
          console.log(perfumeryResponse.data);
          return {
            data1: productsDataResponse.data,
            data2: perfumeryResponse.data
          };
        }
      },
      {
        path: '/product/:id',
        element: <ProductDetail/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={makeRouter}/>
    </>
  );
}

export default App;

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App
