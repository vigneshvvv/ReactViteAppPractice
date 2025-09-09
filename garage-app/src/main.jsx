import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './components/ThemeProvider.jsx'
import Contact from './components/Contact.jsx'
import Sample from './components/Sample.jsx'
import Hooks from './components/Hooks.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    {/* <App /> */}
    {/* <Contact/> */}
    {/* <Sample/> */}
    <Hooks/>
  </ThemeProvider>,
)
