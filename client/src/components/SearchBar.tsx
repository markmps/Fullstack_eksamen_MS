import React, {useState} from "react";
import './css/SearchBar.css'

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
      };

    const handleSearch = () => {
        onSearch(searchQuery)
    }

    return (
           <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleChange}
            className="searchbox-input"
          />
          <button onClick={handleSearch} className="searchbox-button">Search</button>
        </div>
      );
}

export default SearchBar;
