import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar/navbar'
import Aboutme from './component/homepage/aboutMe/aboutme'
import Skill from './component/homepage/skill/skill'
import Project from './component/homepage/project/project'
import Footer from './component/footer/footer'
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
    element: <Skill/>,
  },
  {
    path: "/project",
    element: <Project/>,
  }
]);



function App() {
  return (
    <>
      <div class="main">
      <Navbar/>  
      
        <RouterProvider router={router} />
      <div className="Footer">
        <Footer></Footer>
      </div>
        
      
    </div>
    </>
  )
}

export default App
