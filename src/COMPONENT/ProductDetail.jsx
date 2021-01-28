import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Image, Col, Card, Container, Row} from 'react-bootstrap'
import {urlApi} from '../HELPERS/database'
import {Link} from 'react-router-dom'

function ProductDetail () {
    const [data, setData] = useState({images: []})

    useEffect(()=> {
        axios.get(urlApi)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
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
                                uri: val.uri
                            }
                        }
                    }>
                        <Image src={`https://${val.uri}_2.jpg`}/>
                    </Link>
                </Col>
            )
        })
        return jsx
    }

    return (
        <Container>
             <Card>
                <Card.Body>
                    <Row>
                        {renderProductDetail()}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
       
    );
}

export default ProductDetail