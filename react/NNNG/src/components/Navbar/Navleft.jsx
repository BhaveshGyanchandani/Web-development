import './Navleft.css'
import { Link } from 'react-router-dom'
export function Navleft() {

    return (

       <Link to="/E-commerce-website/">
         <div className="nav-left">
            
            <img aria-label="amazon" id="amlogo" src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="Image not available" />
        
    </div>
       </Link>

    )
}