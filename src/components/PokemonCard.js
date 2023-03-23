import React from 'react'
import styled from 'styled-components'

const PokemonCards = styled.div`
    padding: 5px;
    background-color: #e0e0e0;
    border: 1px solid #979797;
    border-radius: 5px;
    color: #000;
`

const PokemonCard = ({name, url}) => {
  return (
    <PokemonCards>
        <h3>{name}</h3>
        <a href={url}>{url}</a>
    </PokemonCards>
  )
}

export default PokemonCard