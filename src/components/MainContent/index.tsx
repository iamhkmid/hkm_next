import React from "react"
import styled from "styled-components"
import Home from "./Home"
import Projects from "./Projects"

const MainContent: React.FC = () => {
  return (
    <Main>
      <Home />
      <Projects />
    </Main>
  )
}

export default MainContent

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

