import { CartWidget } from "../CartWidget/CartWidget";
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext'
import { Button, Container, Row, Col, Modal, Image } from "react-bootstrap";
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
                {cart.length === 0 ?
                <Row>
                    <Row>
                        <Col lg={12} className='col-cart-empty'>
                            <Button href='/' className='btnVolveraInicio'>Volver al inicio</Button>
                        </Col>
                    </Row>
                        <Col lg={12} className='col2-cart-empty'>
                            <Image src="../images/cart_empty.png"></Image>
                        </Col>
                </Row>
                    :
                    <Col lg={12}>
                        <CartWidget removeItem={removeItem} product={product} />  
                        <Col lg={12} className='col-pay'>
                            <Button className='btnPay' onClick={handleShow}>Listo!</Button>
                        </Col>
                    </Col>
                }
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>¡Solo un paso más!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Modal.Title className='body-modal'>Estás por terminar tu compra, para ello necesitaremos que ingreses lo siguientes datos</Modal.Title>
                        <Checkout handleClose={handleClose}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btnClose' onClick={handleClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>
    )
}