import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import { ThemeContext } from './components/ThemeProvider'

function App() {
  const [count, setCount] = useState(0)
  const{theme, toggleTheme} = useContext(ThemeContext);


  return (
    <>  
    <div style={{
      background: theme === "light" ? "#fff" : "#333"
    }}>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>Change Mode</button>
      <About/>
    </div>
    </>
  )
}

export default App
