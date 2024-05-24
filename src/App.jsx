import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar/navbar'
import Aboutme from './component/homepage/aboutMe/aboutme'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Aboutme/>
      
    </>
  )
}

export default App
