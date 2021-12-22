import React from 'react';
import { useState, useEffect, useRef} from 'react';
import ChartRowProducts from './ChartRowProducts';

function ChartProducts(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
		// Petición Asincrónica al montarse el componente
		const endpoint = '/api/products/';
		fetch(endpoint)
		.then(response =>{
			return response.json()
		})
		.then(producto =>{	
			setProducts(producto.data);
		})
		.catch(error => console.log(error))	
	})

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Descuento</th>
                            </tr>
                        </thead>
                        <tfoot>
                                {/* <tr>
                                    <th>Título</th>
                                    <th>Descripcion</th>
                                    <th>Precio</th>
                                    <th>Categoria</th>
                                    <th>Descuento</th>
                                </tr> */}
                        </tfoot>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRowProducts { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ChartProducts;