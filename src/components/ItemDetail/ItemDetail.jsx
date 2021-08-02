import { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import '../../styles/globalstyles.css'
import { CartContext } from '../../context/CartContext';



export const ItemDetail = ({ item }) => {


    let { addToCart, removeItem, realStock } = useContext(CartContext)

    const onAdd = quantity => addToCart(item, quantity)
    let finalStock = realStock(item);

    return (
        <Row className='col-total' lg={{ span: 8, offset: 2 }} >
                    <Col lg={6} className="img">
                        <Card.Img src={item.img} className="img" />
                    </Col>
                    <Col lg={6} className='col-body'>
                        <Card.Title className='detail-category'>{item.categoryLabel}</Card.Title>
                        <Card.Text>{item.name}</Card.Text>
                        <Card.Title className='detail-price'>${item.price}</Card.Title>
                        <Card.Subtitle className='detail-subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</Card.Subtitle>
                        <Card.Title className='detail-available'>DISPONIBLES: {finalStock}</Card.Title>
                        <Col lg={12}>
                        <ItemCount stock={finalStock} onAdd={onAdd} productId={item.id} removeItem={removeItem} className='itemCount'/>
                        </Col>
                    </Col>
                    <Col>
                    </Col>
        </Row>
    );
}

