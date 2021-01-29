import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Col, Card, Spinner, Row} from 'react-bootstrap'
import {urlApi} from '../HELPERS/database'
import {Link} from 'react-router-dom'
import LocalData from '../HELPERS/data.json'

function ProductDetail () {
    const [data, setData] = useState('')

    useEffect(()=> {
        axios.get(urlApi)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
            setData(LocalData)
        })
    }, [])

    const renderProductDetail = () => {
        var jsx = data.images.map((val, idx) => {
            return (
                <Col key={idx}>
                    <Link to={
                        {
                            pathname: "/img-detail",
                            state: {
                                uri: val.uri,
                                title: data.title
                            }
                        }
                    }>
                        <Card.Img src={`https://${val.uri}_2.jpg`}/>
                    </Link>
                </Col>
            )
        })
        return jsx
    }

    if (data === '') {
        return <Spinner animation="border" />
    }

    return (       
        <div className="m-md-5">

            {/* MOBILE DEVICE */}

            <div className="d-sm-none">
                <Card>
                    
                    {renderProductDetail()}
                    <Card.Body>
                        <Card.Title className="font-weight-bold">
                            <p>{data.title}<br/>{data.price.gross}</p>
                        </Card.Title>
                        <Row>
                            
                        </Row>
                    </Card.Body>
                </Card> 
            </div>

            {/* TABLET AND DESKTOP */}
            <div className="d-none d-md-block">
                <Card>
                    <Row>
                        {renderProductDetail()}
                    </Row>
                </Card>
            </div>


        </div>
       
    );
}

export default ProductDetail