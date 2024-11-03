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
    <div className='card'>
      <img alt='company-logo'/>
        <div className='details'>
            <h2>{name} ({symbol})</h2>
            <p>{currency}</p>
        </div>
        <p className="info">{exchangeShortName} - {stockExchange}</p>
        <AddPorfolio onPortFolioCreate={onPortFolioCreate} symbol={symbol}/>
    </div>
  )
}

export default Card