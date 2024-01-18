import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewProject = () => {

  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data = new FormData();

    data.append("project[name]", e.target.name.value);
    data.append("project[description]", e.target.description.value);
    data.append("project[details]", e.target.details.value);
    data.append("project[live_preview_link]", e.target.live_preview_link.value);
    data.append("project[source_code_link]", e.target.source_code_link.value);
    data.append("project[image]", e.target.image.files[0]);

    try {
      const res = await axios.post("http://localhost:3000/api/v1/projects", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }, 
      });

      setAlert('Project created successfully');
      navigate('/dashboard');
      
    } catch (error) {
      console.error(error)
      setAlert('Unable to create project');
    }

    setTimeout(() => {
      setAlert(null);
    },3000);
    
  };

  return (
    <section className="project-form container">
      <h3 className="text-white">Create Projects</h3>
      <div className={alert ?"alert alert-primary" : " "} role="alert">
      <p>{alert}</p>
      </div>
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" className="form-control" id="name" aria-describedby="name" placeholder="Enter project name" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="description" className="form-control" id="description" placeholder="Project description" />
        </div>

        <div className="form-group">
          <label htmlFor="details">Details</label>
          <input type="details" className="form-control" id="details" placeholder="Project full details" />
        </div>

        <div className="form-group bg-light mt-3 p-2">
          <label htmlFor="image" className='text-black'>Project thumbnail</label>
          <input type="file" className="form-control-file" id="image" />
        </div>

        <div className="form-group">
          <label htmlFor="live_preview_link">Preview link</label>
          <input type="details" className="form-control" id="live_preview_link" placeholder="Project preview link" />
        </div>


        <div className="form-group">
          <label htmlFor=" source_code_link">Code link</label>
          <input type="details" className="form-control" id="source_code_link" placeholder="Project source link" />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>

      </form>


    </section>
  )
}

export default NewProject