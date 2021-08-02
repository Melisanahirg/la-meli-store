import { ItemDetail } from '../ItemDetail/ItemDetail';
import {Container, Card } from 'react-bootstrap';
import '../../styles/globalstyles.css'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getFirestore } from '../../firabase/client';



export function ItemDetailContainer() {

    const { id } = useParams()
    const [item, setItem] = useState([]);


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
    }, [id]);


    return (
        <>
            <Container className='container-detail-container'>
                {item.status === 404 ? <Card.Title>Elemento no encontrado</Card.Title> :
                    <ItemDetail className="itemDetail" item={item} />
                }
            </Container>
        </>
    );
}

