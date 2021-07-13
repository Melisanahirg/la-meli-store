import { useContext, useState } from "react";
import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import { CartContext } from "../../context/CartContext";
import '../../styles/globalstyles.css'



export function ItemCount({ stock, onAdd, removeItem, productId }) {
    
    
    const [productCount, setProductCount] = useState(1);

    const sumar = () => {
        if (productCount) {
            setProductCount(productCount + 1)
        }
    }

    const restar = () => {
        if (productCount > 1) {
            setProductCount(productCount - 1)
        }
    }

    return (

        <Container className='py-2 px-4'>
            <Row className='rowGlobalCount'>
                <Row className='rowNumberProduct'>
                    <Col>
                        <Card.Title className='numberProduct'>
                            {productCount}
                            <Button onClick={restar} className='btnResta'>-</Button>
                            <Button onClick={sumar} disabled={productCount >= stock} className='btnSuma'>+</Button>
                        </Card.Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => onAdd(productCount)}  className='btnComprar'>Comprar</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => removeItem(productId)}  className='btnComprar'>Borrar</Button>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}

