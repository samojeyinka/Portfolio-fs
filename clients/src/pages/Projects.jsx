import React from 'react'
import ProjectsComponent from '../components/Projects'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/stylesheets/MainProject.css'

const Projects = () => {
  return (
    <div className="mp">
      <Header/>
    <ProjectsComponent/>
    <Footer/>
    </div>
  )
}

export default Projects