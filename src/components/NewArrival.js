import { products } from '../data/products';
import { Link } from 'react-router-dom';
const NewArrival = ({search, searchTerm }) => {

    const newArrival = products.filter(product => product.new);
    const newSearch = search.filter(product => product.new)
    return (
        <section className="new section" id="new">
            <h2 className="section-title">NEW ARRIVAL</h2>
            <a href="#" className="section-all">View All</a>
            <div className="new__container bd-grid">
                {  searchTerm.length < 1 ?
                    newArrival && newArrival.map(arrival => (
                        <div className="new__box" key={arrival.id}>
                        <img src={arrival.image} alt={arrival.name} className="arrival__img"/>
                        <div className="new__link">
                            <Link to={`/product/${arrival.id}`} className="button">VIEW PRODUCT</Link>
                        </div>
                       </div>
                    ))
                    :
                    newSearch && newSearch.map(arrival => (
                        <div className="new__box" key={arrival.id}>
                        <img src={arrival.image} alt={arrival.name} className="arrival__img"/>
                        <div className="new__link">
                            <Link to={`/product/${arrival.id}`} className="button">VIEW PRODUCT</Link>
                        </div>
                       </div>
                    ))
                }
              
            </div>
        </section>
    )
}


export default NewArrival;