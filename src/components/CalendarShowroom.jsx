import Calendar from 'react-calendar'; 
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import "./CalendarShowroom.css"; 
import Swal from 'sweetalert2'; 

const CalendarShowroom = ()=>{
  const [fecha, setFecha] = useState(new Date()); 
  const [horario, setHorario] = useState(0); 

  const confirmacion =()=>{
    let horarioelegido = document.getElementById("seleccionhorario").value; 
    console.log(document.getElementById("seleccionhorario").value)
  Swal.fire({
    title: "Cita registrada para:" , 
    text:`${fecha.toLocaleDateString()}` + " a las: " + `${horarioelegido}`, 
    confirmButtonText: "Aceptar",
    confirmButtonColor:"#2C94B5", 
  })}

  return(
  <div className='calendario-gral'>
    <hr/>
    <p className='texto-calendar'> Agenda una cita en nuestro Showroom! </p>
    <div className='display-desktop'>
    <Calendar  dateFormat="dd/MM/yyyy" onChange={setFecha} value={fecha} className="react-calendario"/>
    <div className='btn-display-desktop'>
    <select id='seleccionhorario' className='seleccion-hs' onChange={horario}  > 
        <option value="" id='#' > Selecciona tu horario </option>
        <option value="9hs" id='9hs'> - 09:00 hs</option>
        <option value="11hs" id='2'> - 11:00 hs</option>
        <option value="15hs" id='3'> - 15:00 hs</option>
        <option value="17hs" id='4'> - 17:00 hs</option>
    </select>
    <button className='btn-confirmacion-cita' onClick={confirmacion}> Confirmar cita </button>
  </div>
  </div>
  </div>
  )
}
export default CalendarShowroom; 