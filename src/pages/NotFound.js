import React from 'react';
import imagenFondo from '../assets/images/404.jpg';
import Footer from '../components/Footer';

function NotFound(){
    return(
        <div className="text-center">
            <br></br>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
            <br></br><br></br><br></br>
            <Footer />
        </div>
    )
}

export default NotFound;