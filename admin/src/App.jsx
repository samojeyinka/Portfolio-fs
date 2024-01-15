import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route index element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
)

function App() {
 

  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App