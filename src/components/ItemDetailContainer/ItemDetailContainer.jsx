import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container, Row, Card } from 'react-bootstrap';
import '../../styles/globalstyles.css'
import '../ItemDetail/ItemDetail.css'
import { useContext } from 'react';
import { useParams } from 'react-router';
import { CartContext } from '../../context/CartContext';



export function ItemDetailContainer() {

    const { productId } = useParams()
    let { product, setProductId } = useContext(CartContext)

    setProductId(productId);


    return (
        <Container className="meli-container">
            <Row className='rowGlobalItemDetail'>
                {product.status === 404 ? <Card.Title>Elemento no encontrado</Card.Title> :
                    <ItemDetail className="itemDetail" product={product} />
                }

            </Row>
        </Container>
    );
}

