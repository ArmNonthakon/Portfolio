import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar/navbar'
import Aboutme from './component/homepage/aboutMe/aboutme'
import Skill from './component/homepage/skill/skill'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Aboutme />
  },
  {
    path: "/skill",
    element: <Skill />,
  }
]{
  basename: '/field-logger'
});



function App() {
  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
