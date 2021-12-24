import React from 'react';
import { useState, useEffect, useRef} from 'react';
import imagenFondo from '../assets/images/default-image.png';

function MostValuedProductInDb(){
    const [producto, setProducto] = useState([]);

    useEffect(()=>{
		// Petición Asincrónica al montarse el componente
		const endpoint = '/api/products/mostrated';
		fetch(endpoint)
		.then(response =>{
			return response.json()
		})
		.then(productoMR =>{
            //console.log(productoMR);	
			setProducto(productoMR.data);
		})
		.catch(error => console.log(error))	
	})
    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Producto mas valorado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                        {
                            <p>{producto.description}</p>
                            //producto.map( ( productom) => {
                                //<p>productom.description</p>
                                //this code section is commented because it doesn't work properly, need to find out why...
                            //})
                        }
                        {
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={'http://localhost:3001/products/' + producto.id_product}>Ver detalles</a>
                        }
                    </div>
            </div>
        </div>
    )
}

export default MostValuedProductInDb;
