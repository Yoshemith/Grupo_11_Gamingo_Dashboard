import React from 'react';


function ChartRowProducts(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td>{props.category.name}</td>
                    <td>{props.discount}</td>
                </tr>
    )
}    

export default ChartRowProducts;