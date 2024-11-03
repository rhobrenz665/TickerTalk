import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search : React.FC<Props> = ({ search, handleChange, onClick}: Props) => {
    return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)}>Search</button>
    </div>
  )
}

export default Search