import React from "react";
import {Card, CardDeck, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemList.css';

export const ItemList = ({ title, price, img, id }) => {

    return (
        <Col lg={3}>
            <CardDeck className="ProductCard" >
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Title>${price}</Card.Title>
                        <Link to={`/item/${id}`}><Button className='btnVerInfo'>Ver info</Button></Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Col>
    );
}

