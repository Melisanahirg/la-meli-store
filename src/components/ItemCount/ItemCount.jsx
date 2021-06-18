import { useState } from "react";
import {Button } from 'react-bootstrap';

export function ItemCount ({stock, initial }) {

    const [count, setCounter] = useState(initial);
    
    const sumar = () => {
        if(count) {
            setCounter(count+1)
         }             
     }
     
     const restar = () => {
         if(count>1){
             setCounter(count-1)
         } 
     }

     const onAdd = () => {
        alert(`Compraste ${count} productos`) 

    }
 
    return(
            
        <>
            <div style={{display:"inline-flex"}}>
                <Button  onClick={restar} style={{marginBottom:16, backgroundColor:"rgb(165, 44, 124"}}>-</Button>
                    <p style={{backgroundColor: "rgb(241, 208, 240)", width:60, textAlign:"center"}}>{count}</p>
                <Button  onClick={sumar} disabled={count>=stock} style={{marginBottom:16, backgroundColor:"rgb(165, 44, 124"}}>+</Button>
            </div>

            <Button onClick={onAdd}  style={{display: 'flex', backgroundColor:"rgb(241, 208, 240)", color:"black"}}>Comprar</Button>

        </>
    );
}

