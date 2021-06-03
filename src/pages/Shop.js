import { products } from '../data/products';
import Search from '../components/Search';
import { useContext } from 'react';
import { DataContext } from '../Context/GlobalState';
import ShopList from '../components/ShopList';

const Shop = () => {
    const { searchResult, searchTerm } = useContext(DataContext);
    return (
        <section className="shop section" id="new">
             <Search />
            <h2 className="section-title">TROLLBASKET</h2>
            <p className="section-all">Store</p>
           
            <div className="new__container bd-grid">
                <ShopList products={searchTerm.length < 1 ? products : searchResult} /> 
            </div>
        </section>
    )
}


export default Shop;