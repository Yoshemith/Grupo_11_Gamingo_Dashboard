import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';

function Sidebar(){
    /* const viewHeight = window.outerHeight; style= {{ height: viewHeight }} */
    return (
        <div className="sidebar bg-light" >
            <ul>
                <li>
                    <NavLink to="/" exact className="text-dark rounded py-2 w-100 d-inline-block px-2" activeClassName="active"><FaIcons.FaHome className="me-2"/> Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/products" exact className="text-dark rounded py-2 w-100 d-inline-block px-2" activeClassName="active"><FaIcons.FaListAlt className="me-2"/> Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/users" exact className="text-dark rounded py-2 w-100 d-inline-block px-2" activeClassName="active"><FaIcons.FaUsers className="me-2"/> Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/reports" exact className="text-dark rounded py-2 w-100 d-inline-block px-2" activeClassName="active"><FaIcons.FaChartBar className="me-2"/> Reportes</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;