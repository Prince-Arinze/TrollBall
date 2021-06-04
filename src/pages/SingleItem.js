import { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { DataContext } from '../Context/GlobalState';
import { products } from '../data/products';
import { FaTrash, FaPlus, FaArrowLeft } from 'react-icons/fa'

const SingleData = () => {

    const { id } = useParams();
    const { cartItems, addToCart, removeFromCart, totalPrice, itemPrice, taxPrice } = useContext(DataContext)
    
    const singleProduct = products.find(product => {
        return product.id === +id
    });
     
    return (
        <main>
             <section className="cart__container shop__section">               
                <div className="back-button">
                    <Link to="/shop" className="button back-arrow"><FaArrowLeft className="back-btn"/> <span>Back</span></Link>
                        <h2 className="store__title">YOUR CART</h2>
                </div>
                        <div className="shop__container">
                            <div>
                               <img src={singleProduct.image} alt={singleProduct.name} className="cart_img grid__items"/>
                           </div>
                           <div className="cart__description grid__items">
                                <h3>Product Description</h3>
                               
                                <p>Name: {singleProduct.name}</p>
                                <p>Description: {singleProduct.description}</p>
                                <p>Price: &#8358;{singleProduct.price}</p>
                                <p>Instock: {singleProduct.stock}</p>
                                <button className="button add-btn" onClick={() => addToCart(singleProduct)}>Add to Cart</button>
                           </div>
                           <div className="cart__items grid__items">
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
                                               <div><strong>&#8358;{itemPrice.toFixed(2)}</strong></div>
                                           </div>
                                           <div className="row-flex">
                                               <div>Tax Price</div>
                                               <div><strong>&#8358;{taxPrice.toFixed(2)}</strong></div>
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
                                        <div><button className="button checkout" onClick={() => alert("Checked out")}>Checkout</button></div>
                                    </>
                                } 
                           </div>
                        </div>
        </section>
    </main>
    )
}

export default SingleData;