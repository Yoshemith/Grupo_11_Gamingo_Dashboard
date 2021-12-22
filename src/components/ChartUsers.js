import React, {Component} from 'react';
import ChartRowUsers from './ChartRowUsers';

class ChartUsers extends Component{
    constructor(){
        super()
        this.state ={
            tableRowsData : []
        }
    }

    componentDidMount(){
        fetch('/api/users/')
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
                                this.state.tableRowsData.map( ( row , i) => {
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
}

export default ChartUsers;