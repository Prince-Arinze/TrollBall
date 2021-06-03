import { createContext, useState, useEffect } from 'react';


import { products } from "../data/products"

export const DataContext = createContext();


export const DataProvider = ({children}) => {

    const getItems = JSON.parse(localStorage.getItem("cart")) || [];
    const [ cartItems, setCartItems ] = useState(getItems);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ searchResult, setSearchResult ] = useState([]);

   
    const itemPrice = cartItems.reduce((a, b) => (a + b.price * b.qty), 0);
    const taxPrice = .07 * itemPrice;
    const totalPrice = itemPrice  + taxPrice; 

    const itemsCount = cartItems.length;

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm)
        if(searchTerm !== ""){
            const newProduct = products.filter(product => {
              return Object.values(product).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
            });
            setSearchResult(newProduct)
        }else {
            setSearchResult(products)
        }
      
    }

    const getSearchTerm = (el) => {
        searchHandler(el)
    }

    const addToCart = (product) => {
        const itExist = cartItems.find(x => x.id === product.id);
        if(itExist){
            const items = cartItems.map(item => item.id === product.id ? {...itExist, qty: itExist.qty + 1} : item)
            setCartItems(items)
        }else {
            const itms = [...cartItems, { ...product, qty: 1 }]
            setCartItems(itms)
        }
    }

    const removeFromCart = (product) => {
        const itExist = cartItems.find(x => x.id === product.id);

        if(itExist.qty === 1){
            const remove = cartItems.filter(x => x.id !== product.id)
            setCartItems(remove);
        }else {
            const removes = cartItems.map(x => x.id === product.id ? {...itExist, qty: itExist.qty - 1} : x)
            setCartItems(removes)
        }
    }
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems]);

    const { Provider } = DataContext;
    return (
       <Provider value={{cartItems, addToCart, removeFromCart, totalPrice, itemPrice, taxPrice, itemsCount, searchTerm, getSearchTerm, searchHandler, searchResult}}>
            {children}
       </Provider>
    )
}