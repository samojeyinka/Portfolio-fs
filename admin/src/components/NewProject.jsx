import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import _NewProject from '../partials/_NewProject';

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
    }, 3000);

  };

  return (
    <>
      <_NewProject
        alert={alert}
        handleSubmit={handleSubmit}

      />
    </>
  )
}

export default NewProject