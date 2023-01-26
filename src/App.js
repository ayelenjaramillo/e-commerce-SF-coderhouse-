
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Producto from './components/Producto';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo="Lista de productos"/>
    <Producto titulo="Sunflower Jeans"/>
    </>
  );
}

export default App;
