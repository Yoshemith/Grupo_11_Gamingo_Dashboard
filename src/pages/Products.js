import React from 'react';
import ProductsCRUD from '../components/ProductsCRUD';
import Footer from '../components/Footer';
import ChartProducts from '../components/ChartProducts';

function Products(){
    return (
        <React.Fragment>
            {/*<!-- Content Home -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <div className="container-fluid">
                        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                        </div>
                        <ProductsCRUD />
                        <ChartProducts />
                    </div>
                    <br></br>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}

export default Products;