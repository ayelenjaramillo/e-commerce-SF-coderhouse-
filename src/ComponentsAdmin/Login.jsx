import "./Login.css"; 
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login =()=>{
  const navigate = useNavigate();

  function login() {
    const email = document.getElementById('email').value; 
    const contrasenia = document.getElementById('contrasenia').value;

    const auth = getAuth()

    signInWithEmailAndPassword(auth, email, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate("/administrator"); 
      })
  }
  
  function registrar(){
    const email = document.getElementById('email').value; 
    const contrasenia = document.getElementById('contrasenia').value;
        
    const auth = getAuth(); 
    createUserWithEmailAndPassword(auth, email, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
    })
  }
return(
    <div className="general">
      <div className="detalle"> <p className="parrafo-detalle"> </p></div> 
      <div className="container-general">
        <h3 className="titulo-login"> ¡Hola Administrador! </h3>
        <input className="input-login" id="email" type="email" placeholder="Ingresar email"></input> <br/>
        <input className="input-login" id="contrasenia" type="password" placeholder="Ingresar contrasenia"></input><br/>
        <button className="boton-login" onClick={login}> Ingresar </button>
        <button className="boton-login" onClick={registrar}> Registrar </button><br/>
        <p className="parrafo-login"> Ingresa o registrate con correo  y  contrasenia  validos  para   ver  y  actualizar  tu  stock </p>
      </div>
    </div>
  )
}
export default Login