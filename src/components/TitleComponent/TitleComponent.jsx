import { Col, Row, Container } from 'react-bootstrap';
import './TitleComponent.css';



export function TitleComponent ({category}) {


    return(
        <Container>
            <Row>
                <Col lg={12} className='col-titleComponent'>
                    {category === 'auriculares' ?
                    <h2 className="text-title">AURICULARES</h2> :
                    category ==='mouseyteclados' || category === 'allItems' ? 
                    <h2 className="text-title">MOUSE Y TECLADOS</h2> :
                    <h2 className="text-title">PRODUCTOS</h2>
                    }
                </Col>
            </Row>
        </Container>
    )
}


