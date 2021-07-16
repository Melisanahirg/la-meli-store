import { Table, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export function CartWidget({ removeItem }) {

  let { cart, cartTotal} = useContext(CartContext)

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio Un.</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>

          {cart.map((row) => {
            return (
              <tr>
                <td><img src={row.item.img}></img></td>
                <td>{row.item.name}</td>
                <td>${row.item.price}</td>
                <td>{row.quantity}</td>
                <td>${row.item.price * row.quantity}</td>
                <td><Button onClick={() => removeItem(row.item.id)}>Borrar</Button></td>
              </tr>
            )
          })}
          <tr>
            <td></td>
            <td colSpan="3">Total</td>
            <td>${cartTotal()}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )

}


