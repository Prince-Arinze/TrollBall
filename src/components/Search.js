import { FaSearch } from 'react-icons/fa';
import { useContext, useRef } from 'react';
import { DataContext } from '../Context/GlobalState' 
const Search = () => {
    const inputEl = useRef("")
    const { searchTerm, getSearchTerm } = useContext(DataContext)
    return(
        <section>
            <div className="bd-grid">
                    <form className="search__form">
                        <input type="text" ref={inputEl} value={searchTerm} className="search__input" placeholder="Search Products" onChange={() => getSearchTerm(inputEl.current.value)}/>
                        <FaSearch className="search-icon"/>
                    </form>
            </div>
        </section>
    )
}

export default Search ;