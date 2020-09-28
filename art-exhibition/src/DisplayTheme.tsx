import React, { useContext, useEffect, useState } from 'react'

export interface Theme {
  name: string
  backgroundColor: string
  textColor: string
  buttonColor: string
}

export const themes = {
  space: {
    name: 'space',
    backgroundColor: '#0B1226',
    textColor: 'white',
    buttonColor: '#54728C',
  },
  christmas: {
    name: 'christmas',
    backgroundColor: '#930700',
    textColor: 'white',
    buttonColor: '#00461A',
  },
  easter: {
    name: 'easter',
    backgroundColor: '#FAF0A0',
    textColor: '#E62097',
    buttonColor: '#8FF3CC',
  },
}

export type ThemeContextType = {
  theme: {
    name: string
    backgroundColor: string
    textColor: string
    buttonColor: string
  }
  setTheme: (value: Theme) => void
  // feil å bruke string som datatype for value her ;-)
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null)
//litt hipp som happ om du bruker null eller undefined

//kan være god ide å lage seg en egen alias hook som gjør det enklere å bruke context, mindre å importere
export const useTheme = () => useContext(ThemeContext)!

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(themes.space) //trenger vel ikke <Theme> men skader ikke
  useEffect(() => {
    const currentTheme = themes.space
    setTheme(currentTheme)
  }, [])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {' '}
      {children}
    </ThemeContext.Provider>
  )
}
