import React from "react";
import { Card } from 'react-bootstrap';
import { ItemCount } from "../ItemCount/ItemCount";


export const Cards = ({name, price, stock, initial}) => {

    

    return (

        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body >
                <Card.Title> 
                    {name} 
                </Card.Title>
                <Card.Text>
                    ${price}
                </Card.Text>
                <Card.Text>
                     stock: {stock}
                </Card.Text>
                <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
            </Card.Body>
        </Card>
    );
}