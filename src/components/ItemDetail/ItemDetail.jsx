import { useState } from 'react';
import { Card, CardDeck, Button, Col } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import '../../styles/globalstyles.css'


export const ItemDetail = ({ title, price, img, stock }) => {

    const [count, setCount] = useState()
    console.log('count', count)
    function onAdd(productCount) {
        setCount(productCount)
        
    }


    return (

        <CardDeck className='itemGlobal'>
            <Col xl={4} md={5} sm={4} >
                <Card className='itemPhoto'>
                    <Card.Img src={img} />
                </Card>
            </Col>
            <Col xl={8} md={7} sm={8} xl={{ span: 1, offset: 1 }} sm={{ span: 1, offset: 1 }}>
                <Card className="itemBody">
                    <Card.Body>
                        <Card.Text>{title}</Card.Text>
                        <Card.Title>${price}</Card.Title>
                        <Card.Title>Cantidad disponible: {stock}</Card.Title>
                        <Card.Subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</Card.Subtitle>
                        {!count ? <ItemCount stock={stock} onAdd={onAdd}/> : <Link to='/cart'><Button className='btnTerminarCompra'>Terminar compra</Button></Link>}
                    </Card.Body>
                </Card>
            </Col>
        </CardDeck>

    );
}

