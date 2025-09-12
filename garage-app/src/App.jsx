import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import { ThemeContext } from './components/ThemeProvider'
import HooksDefault from './components/HooksDefault'
import {Provider} from 'react-redux';
import { store } from './components/ReduxPractice/store'
import StoreFetch from './StoreFetch'
import CustomerStore from './components/ReduxPractice/ConsumerStore'

function App() {
  const [count, setCount] = useState(0)
  const{theme, toggleTheme} = useContext(ThemeContext);


  return (
 
    <Provider store={store}>  
    <div style={{
      background: theme === "light" ? "#fff" : "#333"
    }}>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>Change Mode</button>
      <About/>
      <HooksDefault/>
      <StoreFetch/>
      <CustomerStore/>
    </div>
    </Provider>
   
  )
}

export default App
