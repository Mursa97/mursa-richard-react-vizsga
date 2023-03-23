import React from 'react'
import styled from 'styled-components'

const PokemonSearchCard = styled.div`
    padding: 5px;
    background-color: #e0e0e0;
    border: 1px solid #979797;
    border-radius: 5px;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SearchCard = (img, name) => {
  return (
    <PokemonSearchCard>
        <img src={img} alt={name} />
        <h1>{name}</h1>
    </PokemonSearchCard>
  )
}

export default SearchCard