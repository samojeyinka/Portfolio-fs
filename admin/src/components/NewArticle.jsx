import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import _NewArticle from '../partials/_NewArticle';

const NewArticle = () => {

  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data = new FormData();

    data.append("article[title]", e.target.title.value);
    data.append("article[content]", e.target.content.value);


    try {
      const res = await axios.post("http://localhost:3000/api/v1/articles", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });

      setAlert('Article created successfully');
      navigate('/dashboard');

    } catch (error) {
      console.error(error)
      setAlert('Unable to create article');
    }

    setTimeout(() => {
      setAlert(null);
    }, 3000);

  };

  return (
    <>
      <_NewArticle
        alert={alert}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default NewArticle