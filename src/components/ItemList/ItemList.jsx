import React from "react";
import { Card, CardDeck, Col } from 'react-bootstrap';
import { ItemCount } from "../ItemCount/ItemCount";
import './ItemList.css';

export const ItemList = ({ title, price, img }) => {

    return (
        <Col lg={3}>
            <CardDeck className="ProductCard" >
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Title>${price}</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Col>
    );
}

