import React from "react"
import styled from "styled-components"

const MainContent: React.FC = () => {
  return (
    <Main>
      <div className="content">
        <div className="greeting">
          <p>HI THERE I'M</p>
          <p>MUHAMMAD LUQMANUL HAKIM</p>
        </div>
      </div>
    </Main>
  )
}

export default MainContent

const Main = styled.div`
  display: flex;
  min-height: 100vh;
  > div.content {
    display: flex;
    padding: 60px;
  }
`

