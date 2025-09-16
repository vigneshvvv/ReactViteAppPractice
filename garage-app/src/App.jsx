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
import RefExample from './components/Hooks/RefExample'
import UseMemo from './components/Hooks/UseMemo'
import UseRefEx from './components/Hooks/UseRefEx'
import UseMemoEx from './components/Hooks/UseMemoEx'
import UseReference from './components/HooksExercise/UseReference'
import UseMemoExcercise from './components/HooksExercise/UseMemoExcercise'

function App() {
  const [count, setCount] = useState(0)
  const{theme, toggleTheme} = useContext(ThemeContext);


  return (
 
    <Provider store={store}>  
    {/* <div style={{
      background: theme === "light" ? "#fff" : "#333"
    }}> */}
      {/* <h1>{theme}</h1> */}
      {/* <button onClick={toggleTheme}>Change Mode</button> */}
      {/* <About/> */}
      {/* <HooksDefault/> */}
      {/* <StoreFetch/> */}
      {/* <RefExample/> */}
      {/* <UseRefEx/> */}
      {/* <CustomerStore/> */}
      {/* <UseMemo/> */}
      {/* <UseMemoEx/> */}
      <UseReference/>
      <UseMemoExcercise/>
    {/* </div> */}
    </Provider>
   
  )
}

export default App
