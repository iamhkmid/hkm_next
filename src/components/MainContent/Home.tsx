import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileImg from "../../assets/img/Profile"
import { AnimationProps, motion, Variants } from "framer-motion"

const Home: React.FC = () => {
  const message = "'TTheme' is defined but never used"
  const [text, setText] = useState<string[]>([])

  const typeWriter = () => {
    const dataText = ["Typing Text Effects"];
    const typeWriter = (text: string, i: number, fnCallback: () => void) => {

      if (i < (text.length)) {
        document.querySelector(".text-typing")!.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
    const StartTextAnimation = (i: number) => {
      if (typeof dataText[i] == 'undefined') {
        setTimeout(() => {
          StartTextAnimation(0);
        }, 20000);
      }
      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, () => {
          StartTextAnimation(i + 1);
        });
      }
    }
    StartTextAnimation(0);
  }

  useEffect(() => {
    typeWriter()
  }, [])

  const container: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeIn", duration: 0.4, delay: 0.1
      }
    }
  };

  return (
    <Main>
      <div className="content">
        <div className="image">
          <ProfileImg />
        </div>
        <motion.div
          className="greeting"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <p>Hi there I'm <span className="name">Muhammad Luqmanul Hakim</span>, Front-end Developer based in Yogyakarta, Indonesia. Passionate about building interactive and user friendly web application.</p>
        </motion.div>
      </div>
      <h1 className="text-typing">
        'TTheme' is defined but never used
      </h1>
    </Main >
  )
}

export default Home

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.colors.background["01"]};
  > div.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
        font-size: 22px;
        font-weight: 300;
        margin: 0;
        line-height: 1.5;
        width: 600px;
        color: ${({ theme }) => theme.colors.blue?.["01"]};
        > span.name {
          font-size: 20px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.blue?.["05"]};
        }
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
      height: 100%;
      width: 100%;
      > svg {
        position: absolute;
        top: 0;
        left: -90px;
        bottom: 0;
        margin: auto 0;
        height: 800px;
        width: 800px;
      }
    }
  }
  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
  >h1.text-typing {
    position: absolute;
    bottom: 30px;
    left: 40%;
    margin: 0;
    line-height: 1;
    font-size: 60px;
    font-weight: 700;
    margin: 0;
    span {
      border-right: 2px solid;
      animation: caret 1s steps(1) infinite;
    }
  }
`