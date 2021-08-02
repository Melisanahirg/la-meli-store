import { Table, Image, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../CartWidget/CartWidget.css'


export function CartWidget({ removeItem }) {

  let { cart, cartTotal, clearCart } = useContext(CartContext)

  return (
    <>
      <Col lg={12} className='col-title'>
        <Row>
          <Col lg={12} className='col-titlecart'>
            <h3 className='cart-title'>CART</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Button className='clearCart' onClick={clearCart}>Limpiar carrito</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='col-table'>
            <Table className='table-total' size='lg'>
              <thead>
                <tr className='tr-title'>
                  <th>Producto</th>
                  <th></th>
                  <th>Precio Un.</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((row, id) => {
                  return (
                    <tr className='tr-product' key={id}>
                      <td><img className='img-cart' src={row.item.img} alt='cart'></img></td>
                      <td>{row.item.name}</td>
                      <td>${row.item.price}</td>
                      <td>{row.quantity}</td>
                      <td>${row.item.price * row.quantity}</td>
                      <td><Link to="#" className='link-delete' onClick={() => removeItem(row.item.id)}><Image className='delete' src='../../images/trash.ico' alt='trash'></Image></Link></td>
                    </tr>
                  )
                })}
                <tr>
                  <td></td>
                  <td className='td-total' colSpan="3">Total</td>
                  <td className='td-total'>${cartTotal()}</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </>
  )

}


