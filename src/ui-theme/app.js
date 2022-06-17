import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import { useState } from 'react';

// Промежуточный компонент, который использует ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

function App() {
  const [theme, setTheme] = useState(themes.light)

  function toggleTheme() {
    if (theme === themes.dark) {
      setTheme(themes.light)
    } else {
      setTheme(themes.dark)
    }
  }

  // ThemedButton внутри ThemeProvider использует
  // значение светлой UI-темы из состояния, в то время как
  // ThemedButton, который находится вне ThemeProvider,
  // использует тёмную UI-тему из значения по умолчанию
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {value => <h6>
                      Активный цвет фона: {value.background},<br/>
                      Активный цвет шрифта: {value.foreground}
                    </h6>
          }
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
      <ThemedButton />
    </>
  );
}

export default App;