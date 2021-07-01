import { ItemList } from '../ItemList/ItemList';
import { Container, Row} from 'react-bootstrap';
import { useState, useEffect, } from 'react';
import { useParams } from 'react-router';
import '../../styles/globalstyles.css'



export function ItemListContainer() {

    let { categoryId } = useParams()
    let [products, setProducts] = useState([]);

    useEffect(() => {

        async function getProducts(category) {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${category}`);
            const data = await response.json();
            return data.results
        }

        const awaitForData = async () => {
            { categoryId = !categoryId ? 'mouse y teclado rosa' : categoryId }
            let data = await getProducts(categoryId);
            let aux = data.map(element => {
                return {
                    title: element.title,
                    img: element.thumbnail,
                    price: element.price,
                    id: element.id
                }
            });

            setProducts(aux);

        }

        awaitForData();

    }, [categoryId])





    return (
        <Container className="meli-container">
            <Row>
                {products.map((element, index) => {
                    return (
                        <ItemList key={index} title={element.title} price={element.price} img={element.img} id={element.id} />
                    )
                })}
            </Row>
        </Container>

    );
}
