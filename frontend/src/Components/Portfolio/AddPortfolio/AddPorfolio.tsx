import React, { SyntheticEvent } from 'react'


interface Props {
    onPortFolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPorfolio = ({onPortFolioCreate, symbol } : Props) => {
  return (
    <div>
      <form onSubmit={onPortFolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} name="hiddenSymbol"/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddPorfolio
