import { ItemList } from '../ItemList/ItemList';
import { Container, Row} from 'react-bootstrap';
import { useContext, useEffect, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { useParams } from 'react-router';
import '../../styles/globalstyles.css'



export function ItemListContainer() {

    let { categoryId } = useParams()
    let {listProduct, setCategory} = useContext(CartContext)
    
    setCategory(categoryId);

    return (
        <Container className="meli-container">
            <Row>
                {listProduct.map((element, id) => {
                    return (
                        <ItemList key={id} title={element.title} price={element.price} img={element.thumbnail} id={element.id} />
                    )
                })}
            </Row>
        </Container>

    );
}
