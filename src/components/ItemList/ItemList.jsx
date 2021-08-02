import React from "react";
import { Card, CardDeck, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemList.css';

export const ItemList = ({ name, price, img, id, stock }) => {

    return (
        <Col lg={4}>
            <CardDeck className="ProductCard" >
                <Card>
                    <Link to={`/item/${id}`} className='link'>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non luctus orci. Fusce varius purus vel commodo interdum. Sed est quam, blandit vel imperdiet id.</Card.Subtitle>
                            <Card.Title className="price">${price}</Card.Title>
                            {stock > 0 ?
                                <Card.Subtitle className='disponible'>¡Disponible ahora!</Card.Subtitle>
                                :
                                <Card.Subtitle className='disponible'>No disponible</Card.Subtitle>
                            }
                        </Card.Body>
                    </Link>
                </Card>
            </CardDeck>
        </Col>
    );
}

