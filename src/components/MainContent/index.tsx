import React from "react"
import styled from "styled-components"
import Home from "./Home"
import Section2 from "./Section2"

const MainContent: React.FC = () => {
  return (
    <Main>
      <Home />
    </Main>
  )
}

export default MainContent

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

