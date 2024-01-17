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
      <div class={alert ?"alert alert-primary" : " "} role="alert">
      <p>{alert}</p>
      </div>
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="name" class="form-control" id="name" aria-describedby="name" placeholder="Enter project name" />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <input type="description" class="form-control" id="description" placeholder="Project description" />
        </div>

        <div class="form-group">
          <label for="details">Details</label>
          <input type="details" class="form-control" id="details" placeholder="Project full details" />
        </div>

        <div class="form-group bg-light mt-3 p-2">
          <label for="image" className='text-black'>Project thumbnail</label>
          <input type="file" class="form-control-file" id="image" />
        </div>

        <div class="form-group">
          <label for="live_preview_link">Preview link</label>
          <input type="details" class="form-control" id="live_preview_link" placeholder="Project preview link" />
        </div>


        <div class="form-group">
          <label for=" source_code_link">Code link</label>
          <input type="details" class="form-control" id="source_code_link" placeholder="Project source link" />
        </div>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>

      </form>


    </section>
  )
}

export default NewProject