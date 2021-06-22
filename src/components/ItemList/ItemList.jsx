import { Cards } from '../Card/Cards';
import { getData } from '../../utils/const';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

export function ItemList() {

    let [products, setProducts] = useState([]);

    useEffect(() => {

        const awaitForData = async () => {
            let data = await getData('teclado y mouse rosa');
            let aux = data.map(element => {
                return {
                    title: element.title,
                    img: element.thumbnail,
                    price: element.price
                }
            });

            setProducts(aux);

        }

        awaitForData();

    }, [])

    if (products.length > 0) {
        console.log(products);
    }


    return (
        <div className="container"  >
            <h1 className="bienvenidos"></h1>
            <Row>
                {products.map((element, index) => {
                    return (
                        <Cards key={index} title={element.title} price={element.price} img={element.img} />
                    )
                })}
            </Row>
        </div>
    )

}