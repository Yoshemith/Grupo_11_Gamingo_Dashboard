import React from 'react';
import UsersCRUD from '../components/UsersCRUD';
import Footer from '../components/Footer';
import ChartUsers from '../components/ChartUsers';

function Users(){
    return (
        <React.Fragment>
            {/*<!-- Content Home -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <div className="container-fluid">
                        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                        </div>
                        <UsersCRUD />
                        <ChartUsers />
                    </div>
                    <br></br>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}

export default Users;