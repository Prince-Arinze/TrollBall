import { products } from '../data/products';
import { Link } from "react-router-dom";
const Collection = ({search, searchTerm}) => {

    const homeProduct = products.filter(product => product.featured !== true && product.new !== true)
    const newSearch =  search.filter(product => product.featured !== true && product.new !== true)
    return (
        <section className="collection section">
            <div className="collection__container bd-grid">
                  
                       {
                         searchTerm.length < 1 ?
                          homeProduct && homeProduct.map((product, index) => (
                               
                                   index % 2 === 0 ?  
                                   <Link to={`/product/${product.id}`} key={index}>
                                        <div className="collection__box">
                                            <div className="collection__data">
                                                <h2 className="collection__title">
                                                    <span className="collection__subtitle">
                                                        {product.name}
                                                    </span>
                                                </h2>
                                                <Link to={`/product/${product.id}`}  className="collection__view">View Collection</Link>
                                            </div>
                                            <img src={product.image} alt={product.name} className="collection__img"/>
                                        
                                        </div>
                                    </Link>
                                    :
                                    <Link to={`/product/${product.id}`} key={index}>
                                       <div className="collection__box" >
                                            <img src={product.image} alt={product.name} className="collection__img"/>
                                            <div className="collection__data">
                                                <h2 className="collection__title">
                                                    <span className="collection__subtitle">
                                                        {product.name}
                                                    </span>
                                                </h2>
                                                <Link to={`/product/${product.id}`}  className="collection__view">View Collection</Link>
                                            </div>
                                        </div>
                                    </Link>
                               
                               

                           )) :

                           newSearch && newSearch.map((product, index) => (
                               
                            index % 2 === 0 ?  
                            <Link to={`/product/${product.id}`} key={index}>
                                 <div className="collection__box">
                                     <div className="collection__data">
                                         <h2 className="collection__title">
                                             <span className="collection__subtitle">
                                                 {product.name.split(" ")[0]}
                                             </span><br />{product.name.split(" ").slice(1)}
                                         </h2>
                                         <Link to={`/product/${product.id}`}  className="collection__view">View Collection</Link>
                                     </div>
                                     <img src={product.image} alt={product.name} className="collection__img"/>
                                 
                                 </div>
                             </Link>
                             :
                             <Link to={`/product/${product.id}`} key={index}>
                                <div className="collection__box" >
                                     <img src={product.image} alt={product.name} className="collection__img"/>
                                     <div className="collection__data">
                                         <h2 className="collection__title">
                                             <span className="collection__subtitle">
                                                 {product.name.split(" ")[0]}
                                             </span><br />{product.name.split(" ").slice(1)}
                                         </h2>
                                         <Link to={`/product/${product.id}`}  className="collection__view">View Collection</Link>
                                     </div>
                                 </div>
                             </Link>
                        
                        

                    ))
                       }
                    
                    
            </div>
        </section>
    )
}

export default Collection;