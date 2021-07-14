import { Navbar, Image, Nav, Badge } from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export function NavBar() {

    let { itemCount } = useContext(CartContext)


    return (
        <div>
            <Navbar bg="white">
                <Link to="/"><Navbar.Brand><Image src="/images/logopink.png" style={{ width: 300 }} /> </Navbar.Brand></Link>
                <Nav.Link href="/" className="btn-item">Inicio</Nav.Link>
                <Nav.Link href="/category/mouserosa" className="btn-item">Mouses</Nav.Link>
                <Nav.Link href="/category/tecladorosa" className="btn-item">Teclados</Nav.Link>
                <Nav.Link href="/cart" className="btn-item">Mi carrito <Image src="/images/micarrito.png" style={{ width: 40, padding: 3 }} />
                    {itemCount > 0 && 
                        <Badge className="cartBadge">{itemCount}</Badge>
                    }
                </Nav.Link>
            </Navbar>

        </div>
    );


}