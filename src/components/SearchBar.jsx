function SearchBar({search,setSearch}){


return(

<input

className="search"

placeholder="Search expense..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


)


}


export default SearchBar;