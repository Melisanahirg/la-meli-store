import { Navbar, Image, Nav } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';


export function NavBar() {

    return (
        <div>
            <Navbar bg="white">
                <Link to="/"><Navbar.Brand><Image src="/images/logopink.png" style={{ width: 300 }} /> </Navbar.Brand></Link>
                <Nav.Link href="/" className="btn-item">Inicio</Nav.Link>
                <Nav.Link href="/category/mouserosa" className="btn-item">Mouses</Nav.Link>
                <Nav.Link href="/category/tecladorosa" className="btn-item">Teclados</Nav.Link>
                <CartWidget />
            </Navbar>

        </div>
    );


}