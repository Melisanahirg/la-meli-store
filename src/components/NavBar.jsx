import { Navbar, Nav, Form, Button, FormControl, Image } from 'react-bootstrap';
import './NavBar.css';


export function NavBar() {

    return (
        <div>
            <Navbar bg="primary">
                <Navbar.Brand className="mr-auto" href="#home"> <Image src="/images/logo_blanco.png" style={{ height: 50 }} /> </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home" className="btn-item" >Inicio</Nav.Link>
                    <Nav.Link href="#features" className="btn-item">Quienes somos</Nav.Link>
                    <Nav.Link href="#pricing" className="btn-item">Productos</Nav.Link>
                </Nav>
            </Navbar>

        </div>
    );


}