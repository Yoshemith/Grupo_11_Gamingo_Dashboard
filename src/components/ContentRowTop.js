import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowGamingo from './ContentRowGamingo';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					</div>
					<ContentRowGamingo />
					<ContentRowCenter />
				</div>
        </React.Fragment>
    )

}
export default ContentRowTop;