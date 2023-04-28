import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import "./Footer.css"; 
const Footer =()=>{
  return(
    <div className="gral-footer">
      <div className="parrafo">
        <p className="mobile-f"> <strong>SF</strong> JEANS ®   <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-f"/> </p>
        <p className="desktop-f"> Sunflower Jeans - Emprendimiento de Ayelen y Daiana ® 
        <span className="span-desktop-ig">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="icon"/>
        </span>
        </p>
      </div>
      <p className="detalle-creadora">
        <div className="span-f"> 
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-f"/>
        <FontAwesomeIcon icon={faGithubAlt} size="2x" className="icon-f"/>
        </div>
      </p>
     
      <p>  </p>
    </div>
  )
}
export default Footer; 