import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import Stockavailable from "./components/Stockavailable";
import AllProducts from "./components/AllProducts";
import Login from "./ComponentsAdmin/Login";
import Administrator from "./ComponentsAdmin/Administrator"; 
import Create from "./ComponentsAdmin/Create";
import Edit from "./ComponentsAdmin/Edit"; 
import Footer from "./components/Footer" ; 

function App() {
  const [contador, setContador]=useState(0); 

  return (
    <BrowserRouter>
    <NavBar contador={contador} setContador={setContador}/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/AllProducts" element={<AllProducts/>}/>
    <Route exact path="/Stockavailable" element={<Stockavailable/>}/>
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path= "/administrator" element={<Administrator/>}/>
    <Route exact path="/create" element ={<Create/>}/>
    <Route exact path="/edit/:id" element= {<Edit/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
