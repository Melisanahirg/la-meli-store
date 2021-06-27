import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect,  } from 'react';




export function ItemDetailContainer(props) {

     async function getData(id) {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await response.json();
        return data
    }

    let [product, setProduct] = useState({});


    useEffect(() => {

        setTimeout(() => {

            const awaitForData = async () => {
                let data = await getData('MLA922852636');

                setProduct(data);

            }

            awaitForData();

        }, 2000);


    }, [])


    return (
        <Container className="meli-container">
            <Row>
                {product.pictures &&
                    <ItemDetail className="itemDetail" title={product.title} price={product.price} img={product.pictures[6].url} stock={product.available_quantity} />
                }
            </Row>
        </Container>
    );
}

