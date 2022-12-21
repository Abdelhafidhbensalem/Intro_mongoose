import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { getAllProducts } from './redux/actions/actionsProduct';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())


  }, [])


  return (
    <div className="App">
      <NavBar />

    </div>
  );
}

export default App;
