
import bag1 from '../assets/home_img.png'
import Collection from '../components/Collection'
import Featured from '../components/Featured'
import NewArrival from '../components/NewArrival'
import NewsLetter from '../components/NewsLetter'
import Offer from '../components/Offer';

import { Link } from 'react-router-dom'
import Search from '../components/Search'

import { useContext } from "react";
import { DataContext } from "../Context/GlobalState"
const Home = () => {

    const { searchResult, searchTerm } = useContext(DataContext);
    return (
        <main className="l-main">
            <section id="home" className="home">
                <div className="home__container bd-grid">
                    <div className="home__data">
                        <h1 className="home__title">
                            NEW <br /><span>ARRIVALS</span>
                        </h1>
                        <Link to="/shop" className="button">GO SHOPPING</Link>
                    </div>
                    <img className="home__img" src={bag1} alt="home_img"/>
                </div>
            </section>
            <Search />
            <Collection search={searchResult} searchTerm={searchTerm}/>
            <Featured search={searchResult} searchTerm={searchTerm}/>
            <Offer search={searchResult}/>
            <NewArrival search={searchResult} searchTerm={searchTerm}/>
            <NewsLetter />
            <section className="company section">
                <div className="company__container bd-grid">
                    <h1>TROLL<span>B</span>ASKET</h1>
                </div>
               
            </section>
        </main>
    )
}

export default Home;