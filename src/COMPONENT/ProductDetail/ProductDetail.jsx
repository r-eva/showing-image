import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Card, Spinner, Image} from 'react-bootstrap'
import {urlApi} from '../../HELPERS/database'
import {Link} from 'react-router-dom'
import LocalData from '../../HELPERS/data.json'
import './ProductDetail.css'

function ProductDetail () {
    const [data, setData] = useState('')

    /// GET DATA FROM AXIOS OR LOCALDATA
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

    /// SHOWING IMAGE
    const renderProductDetail = () => {
        var jsx = data.images.map((val, idx) => {
            return (
                <Link key={idx} to={
                    {
                        pathname: "/img-detail",
                        state: {
                            uri: val.uri,
                            title: data.title
                        }
                    }
                } className="img-tablet_wrapper">
                    <Image src={`https://${val.uri}_2.jpg`} className="img-thumbnail m-2"/>
                </Link>
            )
        })
        return jsx
    }

    /// SHOWING DATA CLASSIFICATION AND FEATURES
    const renderClassification = () => {
        var jsx = data.attributes.map((val, idx) => {
            return (
                    <div className="row" key={idx}>
                        <div className="col-6 font-weight-bold"><p>{val.label}</p></div>
                        <div className="col-6 ">
                            <p>{val.value}</p>
                        </div>
                    </div>
            )
        })
        return jsx
    }

    const renderFeatures = () => {
        var jsx = data.features.map((val, idx) => {
            return(
                <div className="col-6" key={idx}>
                    <p className="galaxy-fold-features"><span className="font-weight-bold">&#x2713;</span> {val}</p>
                </div>
            )
        })
        return jsx
    }

    /// SHOWING SPINNER BEFORE GETTING DATA
    if (data === '') {
        return <Spinner animation="border">Loading..</Spinner>
    }


    return (       
        <div className="m-md-5">
            <div className="row">
                <div className="col-12 col-sm-7 col-md-5 col-lg-7 mt-3 mt-md-0">
                    <Card className="card-img">
                        <Card.Body className="d-flex align-items-center">
                            <div className="img-tablet_container">
                                {renderProductDetail()}
                            </div>
                        </Card.Body>
                        <Card.Footer className="font-weight-bold">
                            {data.title}<br/>{data.price.gross}
                        </Card.Footer>
                    </Card>
                </div>
                <div className="col-12 col-sm-5 col-md-7 col-lg-5 mt-3 mt-md-0">
                    <Card className="card-technische">
                        <Card.Header className="font-weight-bold">Technische Daten</Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="col-6 font-weight-bold"><p>Preis</p></div>
                                <div className="col-6">
                                    <p>{data.price.grs.amount.toString()} {data.price.grs.currency} (Bruto)<br/>
                                    {data.price.nt.amount.toString()} {data.price.nt.currency} (Netto)<br/>
                                    {data.vat}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 font-weight-bold"><p>Kategorie</p></div>
                                <div className="col-6">
                                    <p>{data.category}</p>
                                </div>
                            </div>
                            {renderClassification()}
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 my-3">
                    <Card>
                        <Card.Header className="font-weight-bold">Ausstattung</Card.Header>
                        <Card.Body>
                            <div className="row">
                                {renderFeatures()}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
       
    );
}

export default ProductDetail