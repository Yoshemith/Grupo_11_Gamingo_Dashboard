import React, {Component} from 'react';
import ChartRowProducts from './ChartRowProducts';

class ChartProducts extends Component{
    constructor(){
        super()
        this.state ={
            tableRowsData : []
        }
    }

    componentDidMount(){
        fetch('/api/products/')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(productos =>{
            this.setState({tableRowsData: productos.data})
        })
        .catch(error => console.log(error))
    }
    render(){
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
                                this.state.tableRowsData.map( ( row , i) => {
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
}

export default ChartProducts;