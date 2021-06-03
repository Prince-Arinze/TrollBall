import { products } from '../data/products';
import { Link } from 'react-router-dom'
const Featured = ({search, searchTerm }) => {

    const featured = products.filter(product => product.featured);
    const newFeatured = search.filter(product => product.featured);
    return (
        <section className="section featured" id="featured">
            <h2 className="section-title">FEATURED PRODUCTS</h2>
            <Link to="/shop" className="section-all">View all</Link>
            <div className="featured__container bd-grid">

            {  searchTerm.length < 1 ?
              featured && featured.map(feature => (
                <div className="featured__product" key={feature.id}>
                    <Link to={`/product/${feature.id}`}>
                        <div className="featured__box">
                            <div className="featured__new">NEW</div>
                            <img src={feature.image} alt={feature.name} className="featured__img"/>
                        </div>  
                        <div className="featured__data">
                            <h3 className="featured__name">{feature.name}</h3>
                            <span className="featured__price">&#8358;{feature.price}</span>
                        </div>
                    </Link>
                 </div>
                 ))
                 :
                 newFeatured &&  newFeatured.map(feature => (
                    <div className="featured__product" key={feature.id}>
                        <Link to={`/product/${feature.id}`}>
                            <div className="featured__box">
                                <div className="featured__new">NEW</div>
                                <img src={feature.image} alt={feature.name} className="featured__img"/>
                            </div>  
                            <div className="featured__data">
                                <h3 className="featured__name">{feature.name}</h3>
                                <span className="featured__price">&#8358;{feature.price}</span>
                            </div>
                        </Link>
                     </div>
                     ))
              }
            </div>
        </section>
    )
}

export default Featured;