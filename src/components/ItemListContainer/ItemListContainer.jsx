import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect,  } from 'react';



export function ItemListContainer() {

    async function getProducts(categorias) {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=
        ${categorias}`);
        const data = await response.json();
        return data.results
    }

    let [products, setProducts] = useState([]);

    useEffect(() => {

        const awaitForData = async () => {
            let data = await getProducts('teclado y mouse rosa');
            let aux = data.map(element => {
                return {
                    title: element.title,
                    img: element.thumbnail,
                    price: element.price,
                }
            });

            setProducts(aux);

        }

        awaitForData();

    }, [])


    return (
        <Container className="meli-container">
            <Row>
                {products.map((element, index) => {
                    return (
                        <ItemList key={index} title={element.title} price={element.price} img={element.img} />
                    )
                })}
            </Row>
        </Container>

    );
}
