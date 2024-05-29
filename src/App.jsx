import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar/navbar'
import Aboutme from './component/homepage/aboutMe/aboutme'
import Skill from './component/homepage/skill/skill'
import Project from './component/homepage/project/project'
import Footer from './component/footer/footer'
import Contact from './component/homepage/contact/contact'
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
  ,{
    path: "/contact",
    element: <Contact/>,
  }
]);



function App() {
  return (
    <>
      <div className="main">
      <Navbar/>  
      <div className='content'>
         <RouterProvider router={router} />
      </div>
      <div className="Footerr">
      
       
        <Footer></Footer>
      </div>
        
      
    </div>
    </>
  )
}

export default App
