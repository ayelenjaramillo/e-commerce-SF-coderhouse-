import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import Stockavailable from "./components/Stockavailable";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";





function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/AllProducts" element={<AllProducts/>}/>
     <Route exact path ="/ProductDetail" element={<ProductDetail/>} ></Route> 
    <Route exact path="/Stockavailable" element={<Stockavailable/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
