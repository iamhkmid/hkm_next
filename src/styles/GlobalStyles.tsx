import { createGlobalStyle } from 'styled-components'
import { TTheme } from '../types'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.background["01"]};
    
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    color: ${({ theme }) => theme.colors.primary?.default};

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray?.["09"]};
      transition: color 0.3s ease;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.gray?.["10"]};
    }
  }
`
