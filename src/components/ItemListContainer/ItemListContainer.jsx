import {Cards} from '../Card/Cards';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemListContainer.css';



export function ItemListContainer (props) {

    const product = {
        name: "Auriculares Sony",
        price: 100,
        stock: 5,
        initial: 1
    }


    return (

    <div className="container" >
       <h1 className="bienvenidos">{props.productData.name}</h1>

       <Cards name={product.name} price={product.price} stock={product.stock} initial={product.initial} />
        
    
    </div>    
        

    );

}
