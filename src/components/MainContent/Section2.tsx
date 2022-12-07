import React from "react";
import styled from "styled-components";

const Section2 = () => {
  return (
    <Main>
      a
    </Main>
  )
}

export default Section2

const Main = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background["02"]}
`