import { Navbar, Nav, Image } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';


export function NavBar() {

    return (
        <div>
            <Navbar bg="white">
                <Navbar.Brand className="mr-auto " href="#home"> <Image src="/images/logopink.png" style={{width:300}} /> </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home" className="btn-item" >Inicio</Nav.Link>
                    <Nav.Link href="#features" className="btn-item">Quienes somos</Nav.Link>
                    <Nav.Link href="#pricing" className="btn-item">Productos</Nav.Link>
                </Nav>
            <CartWidget/>
            </Navbar>

        </div>
    );


}