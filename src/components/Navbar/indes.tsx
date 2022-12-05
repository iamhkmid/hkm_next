import React, { useState } from "react"
import styled from "styled-components"
import { TTheme } from "../../types"
import { motion } from "framer-motion";

const Navbar = () => {
  const [selected, setSelected] = useState<number>(1)
  return (
    <Main>
      <div className="logo">
        <div>i</div>iamhkmid
      </div>
      <ul className="menu-list">
        {menuList.map((menu) => (
          <li onClick={() => setSelected(menu.id)}>
            {menu.label}
            {selected === menu.id && <motion.div className="selected-menu" layoutId="selected-menu" />}
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default Navbar

const menuList = [
  {
    id: 1,
    label: "Home",
    path: "/"
  },
  {
    id: 2,
    label: "About",
    path: "/about"
  },
  {
    id: 3,
    label: "Skill",
    path: "/skill"
  },
  {
    id: 4,
    label: "Project",
    path: "/project"
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact"
  }
]

type TMain = { theme: TTheme }

const Main = styled.div<TMain>`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  min-height: 60px;
  > div.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 50px;
    font-size: 15px;
    font-weight: 600;
    width: fit-content;
    color: ${({ theme }) => theme.colors.blueGrey[100]};
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 1/1;
      width: 25px;
      border-radius: 100%;
      font-size: 16px;
      font-weight: 700;
      background: ${({ theme }) => theme.colors.teal[600]};
    }
  }
  > ul.menu-list {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0 50px;
    font-size: 14px;
    font-weight: 400; 
    > li {
      float: left;
      text-align: center;
      cursor: pointer;
      position: relative;
      padding: 5px 10px;
      border-bottom: 2px solid transparent;
      > div.selected-menu {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background: ${({ theme }) => theme.colors.teal[700]};
        z-index: -1;
        transition: background ease 0.3s;
      }
      :hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.teal[700]};
        > div.selected-menu {
          background: ${({ theme }) => theme.colors.teal[600]};
        }
      }
      transition: border-bottom ease 0.3s;
    }
  }
`;
