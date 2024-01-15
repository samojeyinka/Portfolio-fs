import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Articles from './pages/Articles'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ArticleShow from './pages/ArticleShow';
import ProjectShow from './pages/ProjectShow';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="articles" element={<Articles />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="articles/:id" element={<ArticleShow />} />
      <Route path="projects/:id" element={<ProjectShow />} />
    </Route>
  )
)

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
    <div className={` app ${theme}`}>
      <div className="container">
       
      <RouterProvider router={router}/>
        </div>
    </div>
    </>


  )
}

export default App
