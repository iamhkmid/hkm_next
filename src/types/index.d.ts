import React from "react"

export type TReactFC = {
  children: React.ReactNode
}

type TColorSchema = {
  "50": string
  "100": string
  "200": string
  "300": string
  "400": string
  "500": string
  "600": string
  "700": string
  "800": string
  "900": string
}

export type TTheme = {
  colors: {
    background: {
      "1": string
    }
    blueGrey: TColorSchema
  }
}

export type TGlobalCtx = {
  theme: TTheme
} | null