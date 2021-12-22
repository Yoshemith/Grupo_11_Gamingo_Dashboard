import React from 'react';
import MostValuedProduct from './MostValuedProduct';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <MostValuedProduct />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;