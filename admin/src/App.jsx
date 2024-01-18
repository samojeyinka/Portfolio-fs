import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import ProjectShow from './pages/ProjectShow'
import EditProject from './pages/EditProject'
import EditArticle from './pages/EditArticle'
import ArticleShow from './pages/ArticleShow'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects/:id" element={<ProjectShow />} />
      <Route path="/projects/edit/:id" element={<EditProject />} />
      <Route path="/articles/:id" element={<ArticleShow />} />
      <Route path="/articles/edit/:id" element={<EditArticle />} />
    </Route>
  )
)

function App() {


  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App