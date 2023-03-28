import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import Stockavailable from "./components/Stockavailable";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Login from "./ComponentsAdmin/Login";
import Administrator from "./ComponentsAdmin/Administrator"; 
import Create from "./ComponentsAdmin/Create";
import Edit from "./ComponentsAdmin/Edit"; 

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/AllProducts" element={<AllProducts/>}/>
     <Route exact path ="/ProductDetail" element={<ProductDetail/>} ></Route> 
    <Route exact path="/Stockavailable" element={<Stockavailable/>}/>
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path= "/administrator" element={<Administrator/>}/>
    <Route exact path="/create" element ={<Create/>}/>
    <Route exact path="/edit/:id" element= {<Edit/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
