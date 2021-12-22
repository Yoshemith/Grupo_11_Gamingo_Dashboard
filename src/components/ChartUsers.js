import React, {Component} from 'react';
import { useState, useEffect, useRef} from 'react';
import ChartRowUsers from './ChartRowUsers';

function ChartUsers(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
		// Petición Asincrónica al montarse el componente
		const endpoint = '/api/users/';
		fetch(endpoint)
		.then(response =>{
			return response.json()
		})
		.then(usuario =>{	
			setUsers(usuario.data);
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
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Tipo</th>
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
                            users.map( ( row , i) => {
                                return <ChartRowUsers { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ChartUsers;