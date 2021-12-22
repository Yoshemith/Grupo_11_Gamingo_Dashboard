import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */
/* <!-- ItemCreate --> */
let ItemCreate = {
    title: 'Crear Producto',
    color: 'success', 
    quantity: '',
    icon: 'fa-plus-square',
    link: 'http://localhost:3001/products/create'
}
/* <!-- ItemUpdate --> */
let ItemUpdate = {
    title:' Actualizar Producto', 
    color:'dark', 
    quantity: '',
    icon:'fa-award',
    link: '/'
}
/* <!-- ItemDelete --> */
let ItemDelete = {
    title:'Eliminar Producto' ,
    color:'danger',
    quantity:'',
    icon:'fa-user-check',
    link: '/'
}

let cartProps = [ItemCreate, ItemUpdate, ItemDelete];

function ContentRowMovies(){
    return (
        <div className="row">
            {cartProps.map( (item, i) => {
                return <SmallCard {...item} key={i}/>            
            })}

        </div>
    )
}

export default ContentRowMovies;