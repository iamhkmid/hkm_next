import { createGlobalStyle } from 'styled-components'
import { TTheme } from '../types'

export default createGlobalStyle<{ theme: TTheme }>`
  html, body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.colors.background[1]};
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    color: ${({ theme }) => theme.colors.blueGrey[100]};

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.blueGrey[700]};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.blueGrey[900]};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.blueGrey[900]};
    }
  }
`