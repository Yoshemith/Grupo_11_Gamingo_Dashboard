import React from 'react';


function ChartRowUsers(props){
    return (
                <tr>
                    <td>{props.id_user}</td>
                    <td>{props.firstname}</td>
                    <td>{props.lastname}</td>
                    <td>{props.email}</td>
                    <td>{props.user_types.name}</td>
                </tr>
        )
}

export default ChartRowUsers;