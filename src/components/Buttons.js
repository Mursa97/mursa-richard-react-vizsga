import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 15px;
`

const Button = styled.button`
    outline: none;
    padding: 5px 15px;
    background-color: #e0e0e0;
    border: 1px solid #979797;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
`;

const Buttons = () => {
  return (
    <ButtonContainer>
        <Link to="/all_pokemon"><Button>Összes Pokémon</Button></Link>
        <Link to="/search_pokemon"><Button>Pokémon Keresés</Button></Link>
    </ButtonContainer>
  )
}

export default Buttons