import { useState } from "react";
import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import '../../styles/globalstyles.css'



export function ItemCount({ stock, onAdd }) {

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
                </Row>
            </Row>
        </Container>
    );
}

