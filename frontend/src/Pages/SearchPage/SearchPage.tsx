
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import CardList from '../../Components/CardList/CardList'
import Search from '../../Components/Search/Search';
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import ListPortFolio from '../../Components/Portfolio/ListPortfolio/ListPortFolio';
import Hero from '../../Components/Hero/Hero';

interface Props {}
const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
const [serverError, setServerError] = useState<string | null>(null);
const [portFolioValues, setPortFolioValues] = useState<string[]>([]);
  
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
}

const onClick = async (e: SyntheticEvent) => {
  e.preventDefault();
    const result = await searchCompanies(search);
    if(typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)){
      setSearchResult(result.data)
    }
}   

const onPortFolioCreate = (e: any) => {
  e.preventDefault();
  const symbolValue = e.currentTarget.hiddenSymbol.value; // Access the hidden input value

  const updatedPorfolio = [...portFolioValues, symbolValue];
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
    <Hero />
    <Search onClick={onClick} search={search} handleChange={handleChange}/>
    <ListPortFolio portfolioValues={portFolioValues} onPortfolioDelete={onPortfolioDelete}/>
    { serverError && <h1>{serverError}</h1>}
    <CardList searchResults={searchResult} onPortFolioCreate={onPortFolioCreate} onPortfolioDelete={onPortfolioDelete}/>
  </div>
  )
}

export default SearchPage