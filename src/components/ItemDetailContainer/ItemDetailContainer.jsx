import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container, Row, Card } from 'react-bootstrap';
import '../../styles/globalstyles.css'
import '../ItemDetail/ItemDetail.css'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getFirestore } from '../../firabase/client';



export function ItemDetailContainer() {

    const { id } = useParams()
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const db = getFirestore();

        const itemCollection = db.collection('productos');
        const item = itemCollection.doc(id);

        item.get().then(doc => {

            if (!doc.exists) {
                setItem("not exist")
                return;
            }

            setItem({ id: doc.id, ...doc.data() });

        })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })

    }, [id]);


    return (
        <Container className="meli-container">
            <Row className='rowGlobalItemDetail'>
                {item.status === 404 ? <Card.Title>Elemento no encontrado</Card.Title> :
                    <ItemDetail className="itemDetail" item={item} />
                }

            </Row>
        </Container>
    );
}

