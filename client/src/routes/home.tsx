import React, { useState } from 'react';
import MoviesGrid from '../components/MovieGrid';
import SearchBar from '../components/SearchBar';
import ActorGrid from '../components/ActorGrid'

const HomePage: React.FC = () => {

  const [searchQueryApp, setSearchQueryApp] = useState<string>("");
  const handleSearchQueryApp = (query: string) => {
    setSearchQueryApp(query);
  }
  return (
    <div>
      <SearchBar onSearch={handleSearchQueryApp} />
      <MoviesGrid searchQuery={searchQueryApp}/>
      <ActorGrid searchQuery={searchQueryApp}/>
    </div>
  );
};

export default HomePage;