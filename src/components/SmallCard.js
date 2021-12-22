import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { NavLink } from 'reactstrap';

function SmallCard(props){
    return(
        <div className="col-md-4 mb-4">
            <div className={`card shadow h-100 py-2 bg-${props.color} bg-gradient`}>
                <NavLink href={`${props.link}`}>
                    <div className="card-body card-link">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`titulo-card text-xs fw-bold text-uppercase mb-1`}> {props.title}</div>
                                <div className="h5 mb-0 fw-bold text-gray-800">{props.quantity}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${props.icon} fa-2x text-white`}></i>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
        
    )
}

/* PROP-TYPES NOT WORKING - TYPECHECKERS ERROR WHEN INSTALL */
/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: '',
    icon: ''
}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}


export default SmallCard;