import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import PokemonCard from "../components/PokemonCard";

const AllPokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const AllPokemon = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {

    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => setPokemon(res.data.results))


}, [])


    return (
        <div>
            <h2>Összes Pokemon</h2>
            <AllPokemonContainer>
                {
                pokemon.map(p => {

                    return <PokemonCard name={p.name} url={p.url} key={p.name}/>
                })
            }
            </AllPokemonContainer>
            
        </div>
    );
};

export default AllPokemon;
