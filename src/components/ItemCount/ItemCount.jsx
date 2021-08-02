import { Button, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import '../../styles/globalstyles.css';
import '../ItemCount/ItemCount.css';


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
                <Col lg={6} className='col-botton'>
                    <Button onClick={() => onAdd(productCount)} disabled={stock === 0} className='btnComprar'>Agregar</Button>
                </Col>
                <Col lg={6} className='col-botton'>
                    <Button href="/cart" className='btnComprar'>Ir a carrito</Button>
                </Col>
            </Row>
        </Row>

    );
}

