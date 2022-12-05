import React from "react"
import { ThemeProvider } from "styled-components"
import { colors } from "../styles/colors"
import GlobalStyles from "../styles/GlobalStyles"
import { TGlobalCtx, TReactFC } from "../types"

export const GlobalCtx = React.createContext<TGlobalCtx>(null)

const GlobalCtxProvider: React.FC<TReactFC> = ({ children }) => {
  return (
    <GlobalCtx.Provider value={{ theme }}>
      <GlobalStyles theme={theme} />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </GlobalCtx.Provider>
  )
}

export default GlobalCtxProvider

const theme = {
  colors
}