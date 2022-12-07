import React from "react"
import styled from "styled-components"
import Section1 from "./Section1"
import Section2 from "./Section2"

const MainContent: React.FC = () => {
  return (
    <Main>
      <Section1 />
    </Main>
  )
}

export default MainContent

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

