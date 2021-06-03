import { Link } from 'react-router-dom';
const Offer = () => {
    return (
        <section className="offer section">
            <div className="offer__bg">
                <div className="offer__data">
                    <h2 className="offer__title">Special Offer</h2>
                    <p className="offer_description">Special offers discount for men and women this week only</p>
                    <Link to="/shop" className="button">SHOP NOW</Link>
                </div>
            </div>
        </section>
    )
}

export default Offer;