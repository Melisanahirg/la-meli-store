import { CartWidget } from "../CartWidget/CartWidget";
import { useContext } from "react";
import { CartContext } from '../../context/CartContext'
import { Button, Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './CartComponent.css';



export function CartComponent() {

    let { product, removeItem, cart } = useContext(CartContext)

    return (
        <Container>
            <Row>
                {cart.length == 0 ?
                    <Col>
                        <p>
                            No hay productos en tu carrito
                        </p>
                        <Link to='/'>
                            <Button className='btnVolveraInicio'>Volver al inicio</Button>
                        </Link>
                    </Col>
                    :
                    <CartWidget removeItem={removeItem} product={product} />
                }
            </Row>
        </Container>
    )
}