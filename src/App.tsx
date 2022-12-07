import React from 'react';
import styled from 'styled-components';
import "./styles/fonts.css"
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
      <Main>
        <Navbar />
        <MainContent />
      </Main>
  );
}

export default App;

const Main = styled.div`
  
`
