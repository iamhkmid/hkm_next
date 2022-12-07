import React, { useState } from "react"
import { TReactFC } from "../../types"
import styled from "styled-components"
import { motion } from "framer-motion";

const Navbar: React.FC<TReactFC> = () => {
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

const Main = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  min-height: 60px;
  z-index: 100;
  > div.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 50px;
    font-size: 15px;
    font-weight: 600;
    width: fit-content;
    color: ${({ theme }) => theme.colors.blue?.["01"]};
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 1/1;
      width: 25px;
      border-radius: 100%;
      font-size: 16px;
      font-weight: 700;
      background: ${({ theme }) => theme.colors.blue?.["06"]};
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
      color: ${({ theme }) => theme.colors.blue?.["01"]};
      position: relative;
      padding: 5px 10px;
      border-radius: 2px;
      > div.selected-menu {
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background: ${({ theme }) => theme.colors.primary?.default};
        z-index: -1;
        transition: background ease 0.3s;
      }
      :hover {
          background: ${({ theme }) => theme.colors.gray?.["10"]};
        > div.selected-menu {
          background: ${({ theme }) => theme.colors.blue?.["06"]};
        }
      }
      transition: background ease 0.3s;
    }
  }
`;
