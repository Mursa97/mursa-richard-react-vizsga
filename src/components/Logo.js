import React from 'react'
import styled from 'styled-components'
import LogoImg from '../assets/pokemon_logo.png'

const LogoDiv = styled.div`
  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  width: 500px;
  `

const Logo = () => {
  return (
    <LogoDiv />
  )
}

export default Logo