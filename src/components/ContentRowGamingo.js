import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */
/* <!-- Items in DB --> */
let ItemsInDB = {
    title: 'Productos en DB',
    color: 'primary', 
    quantity: 21,
    icon: 'fa-clipboard-list',
    link: '/'
}
/* <!-- Users in DB --> */
let UsersInDB = {
    title:' Usuarios en DB', 
    color:'success', 
    quantity: '79',
    icon:'fa-award',
    link: '/'
}
/* <!-- Categories quantity --> */
let CatInDB = {
    title:'Categorias en DB' ,
    color:'secondary',
    quantity:'49',
    icon:'fa-user-check',
    link: '/'
}

let cartProps = [ItemsInDB, UsersInDB, CatInDB];

function ContentRowGamingo(){
    return (
        <div className="row">
            {cartProps.map( (item, i) => {
                return <SmallCard {...item} key={i}/>
            })}
        </div>
    )
}

export default ContentRowGamingo;