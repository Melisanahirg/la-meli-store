import { createContext, useState, useEffect } from "react";
import { getFirestore } from "../firabase/client";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {

    const [category, setCategory] = useState();
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        async function getData() {
            const DB = getFirestore(); //conexion a la base de datos 
            const collection = DB.collection('productos') //Tomamos la coleccion
            const response = category ? await collection.where('category', '==', category).get() : await collection.get()
            setListProduct(response.docs.map(element => {
                return {
                    id: element.id,
                    ...element.data()
                }
            }));
        }
        getData();
    }, [category]);

    
    const [cart, setCart] = useState([])

    const clearCart = () => setCart([])

    const isInCart = id => cart.find(product => product.item.id === id);

    const removeItem = id => {
        let newCart = cart.filter(product => product.item.id !== id);
        setCart(newCart);
    }



    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(cartElement => {
                if (cartElement.item.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity }
                } else return cartElement;
            })
            setCart(newCart);
        } else {
            setCart(prev => [...prev, { ...{ item }, quantity }])
        }
    };




    useEffect(() => {

        const localCart = localStorage.getItem('cart');
        !localCart ? localStorage.setItem('cart', JSON.stringify([])) : setCart(JSON.parse(localCart))



    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    const itemCount = cart.reduce((a, b) => a + (b['quantity'] || 0), 0);


    const cartTotal = () => {
    const total = cart.reduce((a, b) => a + (b['item']['price'] * b['quantity'] || 0), 0);
    return total;
    }   


    const realStock = (product) => {

        const foundItem = cart.find((e) => e.item.id === product.id);

        return foundItem ? product.stock - foundItem.quantity : product.stock;

    }



    return (
        <CartContext.Provider value={{ addToCart, listProduct, cart, clearCart, removeItem, itemCount, cartTotal, realStock, setCategory }}>
            {children}
        </CartContext.Provider>
    )
}
