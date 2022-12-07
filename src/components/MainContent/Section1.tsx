import React from "react";
import styled from "styled-components";
import {ReactComponent as ProfileImg } from "../../assets/img/profile-optimize.svg"

const Section1 = () => {
  return (
    <Main>
      <div>
        <div className="image">
          <ProfileImg />
        </div>
        <div className="greeting">
          <p>HI THERE I'M</p>
          <p>MUHAMMAD LUQMANUL HAKIM</p>
          <p>A Front-End Developer </p>
        </div>
      </div>
    </Main>
  )
}

export default Section1

const Main = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background["01"]};
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 60px 80px 0 80px;
    justify-content: space-between;
    > div.greeting {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      z-index: 1;
      gap: 10px;
      > p:nth-child(1) {
        font-size: 18px;
        font-weight: 500;
        margin: 0;
        line-height: 1;
        color: ${({ theme }) => theme.colors.blue?.["01"]};
      }
      > p:nth-child(2) {
        font-size: 40px;
        font-weight: 600;
        margin: 0;
        line-height: 1;
        color: ${({ theme }) => theme.colors.blue?.["01"]};
      }
    }
    > div.image {
      display: flex;
      position: relative;
      > svg {
        position: absolute;
        bottom: -60px;
        left: 0;
        height: 800px;
        width: 800px;
      }
    }
  }
`