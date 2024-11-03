import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../company';
import AddPorfolio from '../Portfolio/AddPortfolio/AddPorfolio';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortFolioCreate: any;
}

const Card: React.FC<Props> = ({ 
   id,
   searchResult: { name, symbol, currency, exchangeShortName, stockExchange},
   onPortFolioCreate
   }: Props) : JSX.Element => {
  return (
    <div
    className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
    key={id}
    id={id}
  >
    <h2 className="font-bold text-center text-deepPink md:text-left">
      {name} ({symbol})
    </h2>
    <p className="text-black">{currency}</p>
    <p className="font-bold text-black">
      {exchangeShortName} - {stockExchange}
    </p>
        <AddPorfolio onPortFolioCreate={onPortFolioCreate} symbol={symbol}/>
    </div>
  )
}

export default Card