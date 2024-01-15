import React,{useState,useEffect} from 'react'
import {BiEnvelope, BiArrowFromTop, BiNetworkChart} from 'react-icons/bi'
import noimage from '../assets/images/noimage.jpeg'
import { Link } from 'react-router-dom'
import '../assets/stylesheets/main.css'
import axios from 'axios'

const Projects = () => {

    const [projects, setProjects]  = useState([]);


  const fetchProjects = async() =>{
    try {
      const res = await axios.get('http://localhost:3000/api/v1/projects');
      const projects = res.data.reverse();
        setProjects(projects);
      console.log(projects);
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    fetchProjects();
  },[]);

  return (
    <>
       <div className="left-side">
                <div className="projects">
                    <h3><BiNetworkChart/> My projects</h3>
                    <div className="project-flex">
                        { projects.length < 1 ? (<div>
                            <h3>No projects added yet😒</h3>
                        </div>) :
                        projects.map(project => (
                        <div className="project-box">
                            <div className="pj-img-box">
                                <img src={project.image_url || noimage}/>
                            </div>
                            <h4 className="pj-title">{project.name}</h4>
                            <p className="pj-description">{project.description}</p>
                            <Link to={`/projects/${project.name.replace(/ /g,'-')}?id=${project.id}`}>View project</Link>
                        </div>
))}
                    </div>
                </div>
            </div>
    </>
  )
}

export default Projects