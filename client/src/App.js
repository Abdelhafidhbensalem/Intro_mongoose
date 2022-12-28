import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import { getAllProducts } from './redux/actions/actionsProduct';
import { Route, Routes } from "react-router-dom"
import AddProduct from './components/AddProduct/AddProduct';
import Filter from './components/Filter/Filter';
import EditProduct from './components/EditProduct/EditProduct';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<>
          <NavBar />
          <Filter />
          <ProductList /> </>} />
        <Route path="/add" element={<> <NavBar /><AddProduct /></>} />
        <Route path="/edit/:id" element={<> <NavBar /><EditProduct /></>} />
      </Routes>

    </div>
  );
}

export default App;
