
import './App.css';
import NavigationBar from './component/navigationbar/NavigationBar';
import { Routes, Route } from 'react-router-dom'
import Home from './component/navigationbar/Home';
import ProductList from './component/product/ProductList';
import ProductDeatils from './component/product/ProductDeatils';
import AddProduct from './component/product/AddProduct';
import EditProduct from './component/product/EditProduct';
function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<ProductList/>}/>
      <Route path="/:idprod" element={<ProductDeatils/>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/edit" element={<EditProduct/>}/>
    </Routes>
    </div>
  );
}

export default App;
