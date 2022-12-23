import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import { getAllProducts } from './redux/actions/actionsProduct';
import { Route, Routes } from "react-router-dom"
import AddProduct from './components/AddProduct/AddProduct';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<> <NavBar /><ProductList /> </>} />
        <Route path="/add" element={<> <NavBar /><AddProduct /></>} />
      </Routes>

    </div>
  );
}

export default App;
