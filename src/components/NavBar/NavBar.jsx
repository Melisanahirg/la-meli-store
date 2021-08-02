import { Navbar, NavDropdown, Image, Nav, Badge } from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../../index.css';


export function NavBar() {

    let { itemCount } = useContext(CartContext)


    return (
        <div>
            <Navbar bg="black">
                <Link to="/"><Navbar.Brand><Image src="/images/logopink.png" className="brand"/> </Navbar.Brand></Link>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/" className="btn-item">INICIO</Nav.Link>
                    <NavDropdown title="PRODUCTOS" className="btn-item" >
                        <NavDropdown.Item href='/category/auriculares' className="btn-category">Auriculares</NavDropdown.Item>
                        <NavDropdown.Item href='/category/mouseyteclados' className="btn-category">Mouse y teclados</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/allItems' className="btn-category">Todos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/cart" className="btn-item">MI CARRITO <Image src="/images/micarrito.png" style={{ width: 33, padding: 3 }} />
                        {itemCount > 0 &&
                            <Badge className="cartBadge">{itemCount}</Badge>
                        }
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );


}