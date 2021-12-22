import React from 'react';
import { useState, useEffect, useRef} from 'react';
import Category  from './Category';

function CategoriesInDb(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
		// Petición Asincrónica al montarse el componente
		const endpoint = '/api/categories/';
		fetch(endpoint)
		.then(response =>{
			return response.json()
		})
		.then(categoria =>{	
			setCategories(categoria.data);
		})
		.catch(error => console.log(error))	
	})

    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 fondoCaja">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorias</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {categories.map((category, index)=>{
                                    return  <Category  {...category}  key={index} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default CategoriesInDb;