
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Producto from './components/Producto';
import CardJeanUnit from './components/CardJeanUnit';


function App() {
  return (
    <>
    <NavBar/>
    <Producto titulo="Sunflower Jeans"/>
    <ItemListContainer saludo="Lista de productos destacados"/>
    {/* <CardJeanUnit/> */}
    </>
  );
}

export default App;
