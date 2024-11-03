import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import './App.css';
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortFolio from './Components/Portfolio/ListPortfolio/ListPortFolio';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portFolioValues, setPortFolioValues] = useState<string[]>([]);
    
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
  }

  const onClick = async (e: SyntheticEvent) => {
      const result = await searchCompanies(search);
      if(typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)){
        setSearchResult(result.data)
      }
  }   
  
  const onPortFolioCreate = (e: any) => {
    e.preventDefault();
    console.log( e.target[0].value, "test")
    console.log(portFolioValues);
    const updatedPorfolio = [...portFolioValues, e.target[0].value];
    console.log(updatedPorfolio)
    setPortFolioValues(updatedPorfolio);
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portFolioValues.filter((value) => {
      return value !== e.target[0];
    });
    setPortFolioValues(removed);
  }

  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <ListPortFolio portfolioValues={portFolioValues} onPortfolioDelete={onPortfolioDelete}/>
      { serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortFolioCreate={onPortFolioCreate} onPortfolioDelete={onPortfolioDelete}/>
    </div>
  );
}

export default App;
