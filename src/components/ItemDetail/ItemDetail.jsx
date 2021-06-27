import { Card, CardDeck, } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({ title, price, img, stock }) => {

    return (
        <CardDeck className="itemDetail" >
            <Card>
                <Card.Img variant="top" src={img} />
            </Card>
            <Card className="cardStyle">
                <Card.Body>
                    <Card.Text>{title}</Card.Text>
                    <Card.Title>${price}</Card.Title>
                    <Card.Title>Cantidad disponible: {stock}</Card.Title>
                    <ItemCount stock={stock} />
                </Card.Body>
            </Card>
        </CardDeck>
    );
}

