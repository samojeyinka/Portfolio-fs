import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProject = () => {

  const [alert, setAlert] = useState('');
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [details,setDetails] = useState('');
  const [previewLink,setPreviewLink] = useState('');
  const [codeLink,setCodeLink] = useState('');

  
  const navigate = useNavigate();


  // Extract the id number from the link
  
  const paramSegment = window.location.pathname.split('/');
  const indexOf = paramSegment.indexOf('edit') + 1;
  const id =  paramSegment[indexOf].replace(/\D/g, '');
  console.log(id);
//********************//



  const fectProject = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/projects/${id}`);
      setName(res.data.name);
      setDescription(res.data.description);
      setDetails(res.data.details);
      setPreviewLink(res.data.live_preview_link);
      setCodeLink(res.data.source_code_link);
  
    } catch (error) {
      console.log(error);
    }
  }
  
  
  useEffect(() => {
    fectProject();
  },[id])

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
      const res = await axios.patch(`http://localhost:3000/api/v1/projects/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }, 
      });

      setAlert('Project updated successfully');
      navigate('/dashboard');
      
    } catch (error) {
      console.error(error)
      setAlert('Unable to update Project');
    }

    setTimeout(() => {
      setAlert(null);
    },3000);
    
  };

  return (
    <section className="article-form container mt-3">
      <h3 className="text-white">Update Project</h3>
      <div className={alert ?"alert alert-primary" : " "} role="alert">
      <p>{alert}</p>
      </div>
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" className="form-control" id="name" aria-describedby="name"
           value={name}
           onChange={e => setName(e.target.value)}
           />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="description" className="form-control" id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="details">Details</label>
          <input type="details" className="form-control" id="details" 
           value={details}
           onChange={e => setDetails(e.target.value)}/>
        </div>

        <div className="form-group bg-light mt-3 p-2">
          <label htmlFor="image" className='text-black'>Project thumbnail</label>
          <input type="file" className="form-control-file" id="image"/>
        </div>

        <div className="form-group">
          <label htmlFor="live_preview_link">Preview link</label>
          <input type="details" className="form-control" id="live_preview_link"
            value={previewLink}
            onChange={e => setPreviewLink(e.target.value)}/>
        </div>


        <div className="form-group">
          <label htmlFor=" source_code_link">Code link</label>
          <input type="details" className="form-control" id="source_code_link"
            value={codeLink}
            onChange={e => setCodeLink(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>

      </form>


    </section>
  )
}

export default EditProject