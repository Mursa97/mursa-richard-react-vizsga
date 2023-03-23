import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SearchCard from '../components/SearchCard';

const Input = styled.input`
  padding: 10px;
  background-color: #e0e0e0;
  border: 1px solid #979797;
  border-radius: 5px;
  width: 500px;
`;

const SearchButton = styled.button`
    outline: none;
    padding: 10px 20px;
    background-color: #e0e0e0;
    border: 1px solid #979797;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    margin-left: 10px;
`;

const PokemonSearchCard = styled.div`
    padding: 5px;
    margin-top: 15px;
    background-color: #e0e0e0;
    border: 1px solid #979797;
    border-radius: 5px;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SearchPokemon = () => {
  
    const [input, setInput] = useState("")
    const [api, setApi] = useState({})
    
function getPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(res => setApi(res.data))
}

    return (
    <div>
        <h1>Pokemon Keresése</h1>
        <Input placeholder='Írd be a keresett Pokemon nevét...' value={input} onChange={(e) => {setInput(e.target.value.toLowerCase())} } />
        <SearchButton onClick={getPokemon}>asdasd</SearchButton>
        <PokemonSearchCard>
            <img src={api.sprites.front_default} alt={api.name} />
            <h1>{api.name}</h1>
        </PokemonSearchCard>
        
    </div>
  )
}

export default SearchPokemon