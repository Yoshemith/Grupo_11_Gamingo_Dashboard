import React, {Component} from 'react';
import Category  from './Category';

class CategoriesInDb extends Component{
    constructor(){
        super()
        this.state ={
            genresList : []
        }
    }

    componentDidMount(){
        fetch('/api/categories/')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(genres =>{
            this.setState({genresList: genres.data})
        })
        .catch(error => console.log(error))
    }

  /*   mouseSobre(){
        let caja = document.querySelector('.fondoCaja');
        caja.classList.toggle("bg-secondary"); 
    } 
    onMouseOver = { () => this.mouseSobre() } */

    render(){
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
                                    {this.state.genresList.map((genre, index)=>{
                                        return  <Category  {...genre}  key={index} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default CategoriesInDb;