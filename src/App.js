import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './components/Logo';
import Buttons from './components/Buttons';
import AllPokemon from './pages/AllPokemon';
import SearchPokemon from './pages/SearchPokemon';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial;
`


function App() {
  return (
    <BrowserRouter>
        <AppContainer>
          <Logo />
          <Buttons />
          <Routes>
            <Route path="/all_pokemon" element={<AllPokemon />}></Route>
            <Route path="/search_pokemon" element={<SearchPokemon />}></Route>
          </Routes>
        </AppContainer>
    </BrowserRouter>
  );
}

export default App;
