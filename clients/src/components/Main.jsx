import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {BiEnvelope, BiArrowFromTop, BiNetworkChart} from 'react-icons/bi'
import {BsBagDash, BsBag} from 'react-icons/bs'
import w2 from '../assets/images/w2.svg'
import w1 from '../assets/images/w1.svg'
import pro1 from '../assets/images/pro1.jpeg'
import '../assets/stylesheets/main.css'
import Projects from './Projects'
import axios from 'axios'
import noimage from '../assets/images/noimage.jpeg'

const Main = () => {

    const [latestProject, setLatestProject]  = useState([]);
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectImage, setProjectImage] = useState('');
    const [projectId, setProjectId] = useState('');


    const fetchLatestProject = async() =>{
      try {
        const res = await axios.get('http://localhost:3000/api/v1/latest');
        const latestProject = res.data
        const {id,name,description,image_url} = latestProject
          setLatestProject(latestProject);

          setProjectImage(image_url);
          setProjectName(name);
          setProjectDescription(description);
          setProjectId(id);

        console.log(latestProject);
      } catch (error) {
        console.log(error)
      }
    }
    
  
    useEffect(() => {
      fetchLatestProject();
    },[]);

  return (
    <section className="main">
        <div className="main-flex">
        <div className="left-side">
                <div className="projects">
                    <h3><BiNetworkChart/> My projects</h3>
                    <div className="project-flex">
            
                    
                        <div className="project-box">
                            <div className="pj-img-box">
                                <img src={projectImage || noimage}/>
                            </div>
                            <h4 className="pj-title">{projectName}</h4>
                            <p className="pj-description">{projectDescription}</p>
                            <Link to={`/projects/${projectName.replace(/ / ,'-')}?id=${projectId}`}>View project</Link>
                        </div>
                    </div>
                </div>
                <Link to={'/projects'} className='smb mt-8'><button>See more projects</button></Link>
            </div>
       
{/* The email and work side */}
            <div className="right-side">
                <div className="right-side-flex">
                    <div className="contact">
                        <div className="ct-top">
                            <i className='ct-icon'><BiEnvelope/></i>
                            <h3>Stay up to date</h3>
                        </div>
                        <p>Get notified when I publish something new, and unsubscribe at any time.</p>
                        <div className="email-actions">
                            <input type='email' placeholder='Email address'/>
                            <button type='submit'>Join</button>
                        </div>
                    </div>
                    <div className="work">
                    <div className="w-top">
                     <i className='w-icon'><BsBagDash/></i>
                            <h3>Experience</h3>
                        </div>
                        <div className="w-flex">
                            <div className="work-box">
                                <div className="wb-left">
                                    <div className="wb-left-img">
                                        <img src={w1}/>
                                        </div>
                                        <div className="wb-left-dt">
                                            <b>Self Employed</b>
                                            <br/>
                                            <small>Fullstack Developer</small>
                                       
                                    </div>
                                    </div>
                                    <div className="wb-right">
                                        <p>2022 — Present</p>
                                    </div>
                                
                            </div>
                            
                        </div>
                        <Link to={'https://docs.google.com/document/d/1Qlf4hD-5coDID9DtgRSc6YfbCPnI8Yg-CSI6-Dn6xHg'} target='_blank'><button className="cv-btn">View CV <BiArrowFromTop/></button></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main