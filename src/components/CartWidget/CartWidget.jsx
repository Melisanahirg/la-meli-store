import {Nav, Image } from 'react-bootstrap';




export function CartWidget() {

    return (
        <>
          <Nav.Link href="#micarrito" className="btn-item">Mi carrito <Image src="/images/micarrito.png" style={{width:40, padding:3}}/></Nav.Link>  

        </>
    );

}