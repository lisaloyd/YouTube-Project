import SearchBar from '../SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const SearchPage = ({}) => {
    
    // async function getSearchResults{searchTerm} {
    //     const response = await axios.get{
    //             `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchTerm}&key=AIzaSyDhid3_YGqPg3ipv8CKkZMgLNumzoxp7y4`
    //     };
    // }

    // useEffect(() => {
    //     getSearchResults('')
    // }, [])

    return ( 
        <div>
            <div>
                <SearchBar/>
            </div>
            <div>
                
            </div>
        </div>
     );
}
 
export default SearchPage;