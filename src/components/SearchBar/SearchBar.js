import React, {useState} from 'react'
import SearchIcon from '../../assets/Icons/search.svg';
import "./searchBar.scss";
import Avatar from '../../assets/images/Mohan-muruge.jpg';
import UploadIcon from '../../assets/Icons/upload.svg';
import App from '../../App.js';


function SearchBar() {

const [searchInput, setSearchInput] = useState('');

const SearchChange = (event) => {
setSearchInput(event.target.value);
};

    return (
    <div className = 'SearchBar'>
      <div className = 'div__SearchInput'>

        <input className = "SearchInput" 
        type = "text" placeholder={"         " + "Search"} 
       // value={searchInput} {/*add value later?*/}
        //onChange={SearchChange}
        />
        
        <img className="searchIcon" src={SearchIcon} 
        alt="search bar icon"/>
        {/*<i className="searchIcon" ></i> */}
       
        {/*<div className = "SearchIcon"></div>*/}
          
          
      </div>
      
    {/*<div className = "SearchResult"></div>*/}
<img className="img__Avatar" src={Avatar} alt="avatar" />
<img src={UploadIcon} alt="upload icon"/>
    </div>
  );
  }
  
export default SearchBar;

