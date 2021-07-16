import { CartWidget } from "../CartWidget/CartWidget";
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext'
import { Button, Container, Row, Col, Modal, } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './CartComponent.css';
import { Checkout } from '../Checkout/Checkout'



export function CartComponent() {

    let { product, removeItem, cart } = useContext(CartContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <Button variant="primary" onClick={handleShow}>
                    Pagar
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Checkout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Checkout/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>
    )
}