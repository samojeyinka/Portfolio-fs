import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ProjectShowPart from '../components/ProjectShow';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectShow = () => {
    const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [details, setDetails] = useState('');
const [image, setImage] = useState('');
const [previewLink, setPreviewLink] = useState('');
const [sourceLink, setSourceLink] = useState('');
const [createdAt, setCreatedAt] = useState('');
const [updatedAt, setUpdatedAt] = useState('');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const getProject = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/v1/projects/${id}`);
    const project = res.data;
    console.log(project);
    const {
        name,description,details, live_preview_link, 
        source_code_link,image ,image_url,created_at,
        updated_at
    } = project;

    setName(name);
    setDescription(description);
    setCreatedAt(created_at);
    setDetails(details);
    setImage(image_url);
    setUpdatedAt(updated_at);
    setPreviewLink(live_preview_link);
    setSourceLink(source_code_link);

  } catch (error) {
    console.error(error)
  }
}

useEffect(() => {
getProject();
}); 

   
  return (
    <>
    <Header/>
    <section className="project-show">
            <ProjectShowPart 
            createdAt={createdAt}
            updatedAt={updatedAt}
            name={name}
            description={description}
            details={details}
            image={image}
            previewLink={previewLink}
            sourceLink={sourceLink}
            />
    </section>
    <br/>
    <Footer/>
    </>
  )
}

export default ProjectShow