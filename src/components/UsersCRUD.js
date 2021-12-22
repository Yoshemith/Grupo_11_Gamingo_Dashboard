import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */
/* <!-- UserCreate --> */
let UserCreate = {
    title: 'Crear Usuario',
    color: 'success', 
    quantity: '',
    icon: 'fa-plus-square',
    link: '/'
}
/* <!-- UserUpdate --> */
let UserUpdate = {
    title:' Actualizar Usuario', 
    color:'dark', 
    quantity: '',
    icon:'fa-award',
    link: '/'
}
/* <!-- UserDelete --> */
let UserDelete = {
    title:'Eliminar Usuario' ,
    color:'danger',
    quantity:'',
    icon:'fa-user-check',
    link: '/'
}

let cartProps = [UserCreate, UserUpdate, UserDelete];

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