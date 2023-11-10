import React, {useState} from 'react'
import SearchIcon from '../../assets/Icons/search.svg';
import "./searchBar.scss";
import Avatar from '../../assets/images/Mohan-muruge.jpg';
import UploadIcon from '../../assets/Icons/upload.svg';
import { Link } from 'react-router-dom';


function SearchBar() {

const [searchInput, setSearchInput] = useState('');

const SearchChange = (event) => {
setSearchInput(event.target.value);
};

    return (
      <div className = 'SearchBar'>
      <div className = 'div__SearchInput'>

      <Link to="*"> <input className = "SearchInput" 
        type = "text" placeholder={"         " + "Search"} /></Link>
        
        <img className="searchIcon" src={SearchIcon} 
        alt="search bar icon"/>          
          
      </div>
      
<img className="img__Avatar" src={Avatar} alt="avatar" />
<img src={UploadIcon} alt="upload icon"/>
    </div>
  );
  }
  
export default SearchBar;

