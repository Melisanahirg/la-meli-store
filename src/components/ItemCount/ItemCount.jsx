import { useState } from "react";
import {Button } from 'react-bootstrap';


export function ItemCount ({stock}) {
    
    
    const [productCount, setProductCount] = useState(1);
    
    const sumar = () => {
        if(productCount) {
            setProductCount(productCount+1)
         }             
     }
     
     const restar = () => {
         if(productCount>1){
             setProductCount(productCount-1)
         } 
     }

     const onAdd = () => {
        alert(`Compraste ${productCount} productos`) 

    }
 
    return(
            
        <>
            <div style={{display:"inline-flex"}}>
                <Button  onClick={restar} style={{marginBottom:16, backgroundColor:"rgb(165, 44, 124"}}>-</Button>
                    <p style={{backgroundColor: "rgb(241, 208, 240)", width:60, textAlign:"center"}}>{productCount}</p>
                <Button  onClick={sumar} disabled={productCount>=stock} style={{marginBottom:16, backgroundColor:"rgb(165, 44, 124"}}>+</Button>
            </div>

            <Button onClick={onAdd}  disabled={stock===0} style={{display: 'flex', backgroundColor:"rgb(241, 208, 240)", color:"black", marginLeft:'405px'}}>Comprar</Button>

        </>
    );
}

