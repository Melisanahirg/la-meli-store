import { ItemList } from '../ItemList/ItemList';
import { Container, Row } from 'react-bootstrap';
import '../../styles/globalstyles.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'



export function ItemListContainer() {

    const { category } = useParams();

    const { listProduct, setCategory } = useContext(CartContext);

    setCategory(category);

    console.log(listProduct)

    return (


        <Container>
            <Row>
                {listProduct.map((element, id) => {
                    return (
                        <ItemList key={id} name={element.name} price={element.price} img={element.img} id={element.id} />
                    )
                })}
            </Row>
        </Container>

    )
}
