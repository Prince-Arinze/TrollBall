import { Link } from 'react-router-dom';

const ShopList = ({products}) => {
    return (
        <>
            {
                products.length > 0 ?
                 products.map(shop => (
                    <div className="new__box" key={shop.id}>
                    <img src={shop.image} alt={shop.name} className="shop__img"/>
                    <div className="new__link">
                        <Link to={`/product/${shop.id}`} className="button">VIEW PRODUCT</Link>
                    </div>
                 </div>
                )) : <h3>Item not Found</h3>
            }
        </>
    )
}
  

export default ShopList