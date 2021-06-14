
import './ItemListContainer.css';



export function ItemListContainer (props) {

    return (

    <div className="container" >
       <h1 className="bienvenidos">{props.productData.name}</h1>
    </div>    
        

    );

}
