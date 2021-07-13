import { useState, useContext } from 'react';
import { Card, CardDeck, Button, Col } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import '../../styles/globalstyles.css'
import { CartContext } from '../../context/CartContext';


export const ItemDetail = ({product}) => {
    console.log(product)

    let {cart, addToCart, removeItem} = useContext(CartContext)

    const onAdd = quantity => addToCart(product, quantity)


    return (

        <CardDeck className='itemGlobal'>
            <Col xl={4} md={5} sm={4} >
                <Card className='itemPhoto'>
                    <Card.Img src={product.thumbnail} />
                </Card>
            </Col>
            <Col xl={8} md={7} sm={8} xl={{ span: 1, offset: 1 }} sm={{ span: 1, offset: 1 }}>
                <Card className="itemBody">
                    <Card.Body>
                        <Card.Text>{product.title}</Card.Text>
                        <Card.Title>${product.price}</Card.Title>
                        <Card.Title>Cantidad disponible: {product.available_quantity}</Card.Title>
                        <Card.Subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</Card.Subtitle>
                        { cart && <ItemCount stock={product.available_quantity} onAdd={onAdd} productId={product.id} removeItem={removeItem} />}
                    </Card.Body>
                </Card>
            </Col>
        </CardDeck>

    );
}

