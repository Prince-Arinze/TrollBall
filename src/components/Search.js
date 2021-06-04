import { FaSearch } from 'react-icons/fa';
import { useContext, useRef } from 'react';
import { DataContext } from '../Context/GlobalState' 
const Search = () => {
    const inputEl = useRef("")
    const { searchTerm, getSearchTerm } = useContext(DataContext)
    return(
        <section className="search__section">
            <div className="box">
                <input type="checkbox" id="check"/>
                <div className="search__box">
                   <input type="text" ref={inputEl} value={searchTerm} placeholder="Search Products" onChange={() => getSearchTerm(inputEl.current.value)}/>
                   <label htmlFor="check" className="icon">
                     <FaSearch/>
                   </label>
                </div>
            </div>
        </section>
    )
}

export default Search ;