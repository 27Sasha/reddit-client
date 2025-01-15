import { SearchBar } from '../searchbar/SearchBar'
import './NavBar.css'
export function NavBar (){
    return(
        <div className="navbar">
            <div className="header">
                <img src="/logo.png" width="100px" height="100px" alt="logo" />
                <h1>Reddit App</h1>
            </div>
            <div className="search-bar-wrapper">
                <form className="searchBar">
                    <SearchBar />
                </form>
            </div>
        </div>
    )
}
