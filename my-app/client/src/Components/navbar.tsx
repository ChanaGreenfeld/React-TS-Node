import { MDBBreadcrumb} from "mdbreact";
import { NavLink } from "react-router-dom";
import './navbarc.css';



const NavBar = () => {
  return<>
  
      <MDBBreadcrumb   className="nav">
        <NavLink to="/HomePage"><img src="logo.png"></img></NavLink> 
        <NavLink to="/About" className="navfont">About</NavLink>
        <NavLink to="/View" className="navfont" >ViewProducts</NavLink>
        <NavLink to="/Manager" className="navfont">Manager</NavLink>
        <NavLink to="/Login" className="navfont">Login</NavLink>
        <NavLink to="/Register" className="navfont">Register</NavLink>
      </MDBBreadcrumb>

       
 </>
};

export default NavBar;
