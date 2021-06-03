import { FaSearch } from 'react-icons/fa';
import { useContext, useRef } from 'react';
import { DataContext } from '../Context/GlobalState' 
const Search = () => {
    const inputEl = useRef("")
    const { searchTerm, getSearchTerm } = useContext(DataContext)
    return(
        <section className="section newsletter" id="subscribe">
            <div className="newsletter__container bd-grid">
                <div className="newsletter__subscribe">
                
                    <form action="" className="newsletter__form">
                        <input type="text" ref={inputEl} value={searchTerm} className="newsletter__input" placeholder="Search Products" onChange={() => getSearchTerm(inputEl.current.value)}/>
                        <span className="button-seach"><FaSearch className="search-icon"/></span>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Search ;