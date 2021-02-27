import React, {useState} from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles} from "./theme.js"
import Add from './compo/Add.js';

const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
`

function App() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <StyledApp>
              Hello World
              <button onClick={() => themeToggler()}>Change Theme</button>
          </StyledApp>
          <Add />
      </ThemeProvider>
  )
}

export default App