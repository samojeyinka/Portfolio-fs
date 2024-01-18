import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditArticle = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();


  // Extract the id number from the link
  
  const paramSegment = window.location.pathname.split('/');
  const indexOf = paramSegment.indexOf('edit') + 1;
  const id =  paramSegment[indexOf].replace(/\D/g, '');
  console.log(id);
//********************//

const fectArticle = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/v1/articles/${id}`);
    setTitle(res.data.title);
    setContent(res.data.content);
  } catch (error) {
    
  }
}


useEffect(() => {
  fectArticle();
},[id])

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data = new FormData();

    data.append("article[title]", e.target.title.value);
    data.append("article[content]", e.target.content.value);
  

    try {
      const res = await axios.patch(`http://localhost:3000/api/v1/articles/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }, 
      });

      setAlert('Article updated successfully');
      navigate('/dashboard');
      
    } catch (error) {
      console.error(error)
      setAlert('Unable to update article');
    }

    setTimeout(() => {
      setAlert(null);
    },3000);
    
  };

  return (
    <section className="article-form container">
      <h3 className="text-white">Update Article</h3>
      <div className={alert ?"alert alert-primary" : " "} role="alert">
      <p>{alert}</p>
      </div>
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Title</label>
          <input type="title" className="form-control" id="title" aria-describedby="name"
          value={title}
          onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input type="content" className="form-control" id="content" 
          value={content}
          onChange={e => setContent(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>

      </form>


    </section>
  )
}

export default EditArticle