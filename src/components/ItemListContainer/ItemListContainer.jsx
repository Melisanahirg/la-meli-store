import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { Container } from 'react-bootstrap';




export function ItemListContainer (props) {


              
        return (
            <Container className="meli-container">
                <h1 className="bienvenidos">{props.productData.name}</h1> 
                <ItemList/>        
            </Container>        
   
             );
        }

