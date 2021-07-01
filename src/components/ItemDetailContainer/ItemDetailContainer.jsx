import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container, Row, Card } from 'react-bootstrap';
import { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/globalstyles.css'
import '../ItemDetail/ItemDetail.css'



export function ItemDetailContainer() {

    const {itemId} = useParams()
    let [product, setProduct] = useState({});


    useEffect(() => {

        async function getData() {
            const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
            const data = await response.json();
            return data
        }

        const awaitForData = async () => {
        let data = await getData();

            setProduct(data);

        }

        awaitForData();

            
            
        }, [itemId])


    return (
        <Container className="meli-container">
            <Row className='rowGlobalItemDetail'>
                {product.status === 404 ? <Card.Title>Elemento no encontrado</Card.Title> :
                   <ItemDetail className="itemDetail" title={product.title} price={product.price} img={product.thumbnail} stock={product.available_quantity} />
                }
            </Row>
        </Container>
    );
}

