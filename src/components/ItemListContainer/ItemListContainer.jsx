import { ItemList } from '../ItemList/ItemList';
import { Row } from 'react-bootstrap';
import '../../styles/globalstyles.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import '../ItemListContainer/ItemListContainer.css'
import {TitleComponent} from '../TitleComponent/TitleComponent'




export function ItemListContainer() {

    const { category } = useParams();

    const { listProduct, setCategory } = useContext(CartContext);

    setCategory(category);


    return (
        <>
            <TitleComponent category={category}/>
            <Row>
                {listProduct.map((element, id) => {
                    return (
                        <ItemList key={id} name={element.name} price={element.price} img={element.img} id={element.id} stock={element.stock} />
                    )
                })}
            </Row>
        </>

    )
}
