import React from 'react';
import ContentRowTop from '../components/ContentRowTop';
import Footer from '../components/Footer';

function Home(){
    return (
        <React.Fragment>
            {/*<!-- Content Home -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}

export default Home;