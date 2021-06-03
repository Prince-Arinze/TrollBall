import { FaBars } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/GlobalState';



const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { itemsCount } = useContext(DataContext)

    const handleVisible = () => {
        setVisible(!visible)
    }
    return (
        // Header
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className="nav__logo">
                    <Link to="/">TrollBasket</Link>
                </div>
                <div className={visible ? "nav__menu visible" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="/" className="nav__link" onClick={handleVisible}>Home</Link></li>
                        <li className="nav__item"><a href="#featured" className="nav__link" onClick={handleVisible}>Featured</a></li>
                        <li className="nav__item"><a href="#new" className="nav__link" onClick={handleVisible}>New</a></li>
                        <li className="nav__item"><a href="#subscribe" className="nav__link" onClick={handleVisible}>Subscribe</a></li>
                    </ul>
                </div>
                <div className="cart__menu">
                    <Link to="/cart" className="cart">
                       <BiCart className="nav__cart"/>
                       <span className="item__count">{itemsCount ? itemsCount : 0}</span>
                    </Link>
                    <span className="nav__toggle" id="nav-toggle" onClick={handleVisible}><FaBars /></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;