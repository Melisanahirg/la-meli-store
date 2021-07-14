import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {
    
        let [categoryId, setCategory] = useState()
        let [listProduct, setListProduct] = useState([]);
    
        let [productId, setProductId] = useState()
        let [product, setProduct] = useState({});
    
    useEffect(() => {
        
        async function getProduct(category) {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${category}`);
            const data = await response.json();
            setListProduct(data.results)
         }
    
        !categoryId ? getProduct('mouse y teclado rosa') : getProduct(categoryId)
         
    }, [categoryId]);
    
    
    useEffect(() => {
        
        async function getProductId() {
            const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
            const data = await response.json();
            setProduct(data)
         }
         
         getProductId(productId)
         
    }, [productId]);




    const [cart, setCart] = useState([])
    
    const clearCart = () => setCart([])
    
    const isInCart = id => cart.find(product => product.item.id === id);

    const removeItem = id => {
        let newCart = cart.filter(product => product.item.id != id);
        setCart(newCart);
    }

    
    
    const addToCart = (item, quantity) =>{
        if (isInCart(item.id)) {
            const newCart = cart.map(cartElement => {
                if (cartElement.item.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity }
                } else return cartElement;
            })
            setCart(newCart);
        } else {
            setCart(prev => [...prev, {...{item}, quantity}])
        }
    };
    
    


    useEffect(() => {
        
        const localCart = localStorage.getItem('cart');
        !localCart ? localStorage.setItem('cart', JSON.stringify([])) : setCart(JSON.parse(localCart))


         
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    let itemCount = cart.reduce((a, b) => a + (b['quantity'] || 0), 0);

    let cartTotal = cart.reduce((a, b) => a + (b['item']['price'] * b['quantity'] || 0), 0);
    

            
            
    return (
        <CartContext.Provider value={{ addToCart, listProduct, setCategory, product, setProductId, cart, clearCart, removeItem, itemCount, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
 }
