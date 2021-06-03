import { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { DataContext } from '../Context/GlobalState';
import { products } from '../data/products';
import { FaTrash, FaPlus, FaArrowLeft } from 'react-icons/fa'

const Cart= () => {
    const { cartItems, addToCart, removeFromCart, totalPrice, itemPrice, taxPrice } = useContext(DataContext)
    
    return (
        <main>
        <section>
            <div className="cart__container bd-grid shop__section">
                  
                    <div>
                    <Link to="/shop" className="button back-arrow"><FaArrowLeft className="back-btn"/> Back</Link>
                        <h2 className="home__title store__title">YOUR CART</h2>
                    </div>
                        <div className="shop__container">
                           <div className="cart__items">
                                <h3>Cart Items</h3>
                                <hr />
                                { cartItems.length === 0 && <div>Cart is empty.</div>}
                                { cartItems.map(item => (
                                    <div key={item.id} className="row-flex">
                                        <div>{item.name}</div>
                                        <div className="btns">
                                            <button className="button" onClick={() => addToCart(item)}><FaPlus /></button>
                                            <button className="button red" onClick={() => removeFromCart(item)}><FaTrash /></button>
                                        </div>
                                        <div className="prices">{item.qty} X &#8358;{item.price.toFixed(2)}</div>
                                    </div>
                               
                                ))}

                                {
                                    cartItems.length !== 0 && (
                                        <>
                                           <hr />
                                           <div className="row-flex">
                                               <div>Items Price</div>
                                               <div>&#8358;{itemPrice.toFixed(2)}</div>
                                           </div>
                                           <div className="row-flex">
                                               <div>Tax Price</div>
                                               <div>&#8358;{taxPrice.toFixed(2)}</div>
                                           </div>
                                           <div className="row-flex">
                                               <div><strong>Total Price</strong></div>
                                               <div><strong>&#8358;{totalPrice.toFixed(2)}</strong></div>
                                           </div>
                                        </>
                                    )
                                }
                                {
                                    cartItems.length !== 0 &&  
                                    <>
                                        <hr />
                                        <div><button className="button cart-checkout">Checkout</button></div>
                                    </>
                                } 
                           </div>
                        </div>
             </div>
        </section>
    </main>
    )
}

export default Cart;