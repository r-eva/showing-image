import React from 'react';
import {useLocation, useHistory} from 'react-router'
import {Image} from 'react-bootstrap'
import Modal from '../Modal/Modal'
import './ImgDetail.css'

function ImgDetail() {
    const location = useLocation()
    const history = useHistory()
    return (
        <Modal
            onClick={()=> {
                history.push("/")
            }}
            title={location.state.title}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                }}
            >   
                <Image src={`https://${location.state.uri}_27.jpg`} className="img-fluid"/>
            </div>
        </Modal>
    );
}
export default ImgDetail;








