import { useState } from 'react'
import Header from './components/Header/Header'
import Select from './components/Controller/Controller.tsx'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/global.ts'

export default function App() {

  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Select />
      </ThemeProvider>
    </>
  )
}


