import React from "react";
import { Card, CardDeck, Col } from 'react-bootstrap';
import { ItemCount } from "../ItemCount/ItemCount";
import './Cards.css';


export const Cards = ({ title, price, img }) => {



    return (
        <Col md={4} className="mb-4">
            <CardDeck className="ProductCard">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>${price}</Card.Text>
                    </Card.Body>
                </Card>
                {/* <ItemCount stock={stock} initial={initial} /> */}
            </CardDeck>
        </Col>
    );
}