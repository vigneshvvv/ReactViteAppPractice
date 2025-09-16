import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './components/ThemeProvider.jsx'
import Contact from './components/Contact.jsx'
import Sample from './components/Sample.jsx'
import Hooks from './components/Hooks.jsx'
import ParantComponent from './components/ParantComponent.jsx'
import HooksClassic from './components/HooksClassic.jsx'
import StoreFetch from './StoreFetch.jsx'
import HooksDefault from './components/HooksDefault.jsx'
import JqueryTest from './components/Jquery/JqueryTest.jsx'
import Jquery from './components/Jquery/Jquery.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    {/* <App /> */}
    {/* <JqueryTest/> */}
    <Jquery/>
    {/* <Contact/> */}
    {/* <Sample/> */}
    {/* <Hooks/> */}
    {/* <ParantComponent/> */}
    {/* <HooksDefault/> */}
  </ThemeProvider>,
)
