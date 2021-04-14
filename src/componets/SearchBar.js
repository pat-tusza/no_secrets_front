import React from 'react'

const SearchBar = ({setSearch, search}) => {
    return (
        <div>
            <form className="center-search">
                <input 
                className="search"
                type="text" 
                placeholder="Search"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchBar
