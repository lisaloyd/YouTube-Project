import React, { useState } from 'react';


const SearchBar = ({}) => {
    const [searchTerm, setSearchTerm] = useState('');

  
return ( 
        <div>
            <label>Search Bar</label>
            <input type='search' value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button>Search</button>
        </div>
     );
}
 
export default SearchBar;