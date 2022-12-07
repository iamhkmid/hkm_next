import React from "react"
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}

export type TReactFC = {
  children?: React.ReactNode
}

export type TDefaultColorPallet = {
  "01"?: stringf
  "02"?: string
  "03"?: string
  "04"?: string
  "05"?: string
  "06"?: string
  "07"?: string
  "08"?: string
  "09"?: string
  "10"?: string
}

export type TColors = {
  background: {
    "01": string
    "02": string
  }
  primary?: {
    dark?: string
    hard?: string
    default?: string
    medium?: string
    Soft?: string
    ultrasoft?: string
  },
  blue?: TDefaultColorPallet
  red?: TDefaultColorPallet
  yellow?: TDefaultColorPallet
  gray?: TDefaultColorPallet
  green?: TDefaultColorPallet
  purple?: TDefaultColorPallet
}

export type TTheme = {
  colors: TColors
}

export type TGlobalCtx = {
  theme: TTheme
} | null