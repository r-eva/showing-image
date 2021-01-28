import React from 'react';
import {useLocation} from 'react-router'
import {Image} from 'react-bootstrap'

function ImgDetail() {
    const location = useLocation()
    console.log(location.state)
    return (
        <div>
            <Image src={`https://${location.state.uri}_27.jpg`}/>
        </div>
    );
}

export default ImgDetail;


