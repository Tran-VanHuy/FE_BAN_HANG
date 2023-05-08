
import './App.css';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { ProductDetail } from './pages/ProductDetail';
import { BlogDetail } from './pages/BlogDetail';
import { BannerAdmin } from './pages/Admin/Banner';
import styled from 'styled-components';
import { ProductsAdmin } from './pages/Admin/Products';
import { CategoryProductsAdmin } from './pages/Admin/CategoryProducts';
import { AdverAdmin } from './pages/Admin/Adver';


function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },
  // ]);

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:slug" element={<ProductDetail />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path='/admin/banner' element = {<BannerAdmin />} />
      <Route path='/admin/products' element = {<ProductsAdmin />} />
      <Route path='/admin/category-products' element = {<CategoryProductsAdmin />} />
      <Route path='/admin/adver' element = {<AdverAdmin />} />
    </Routes>
  </BrowserRouter>,
    </div>
  );
}



export default App;

