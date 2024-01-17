import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    },3000);
    
  };

  return (
    <section className="article-form container">
      <h3 className="text-white">Create Articles</h3>
      <div class={alert ?"alert alert-primary" : " "} role="alert">
      <p>{alert}</p>
      </div>
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="form-group">
          <label for="name">Title</label>
          <input type="title" class="form-control" id="title" aria-describedby="name" placeholder="Enter article title" />
        </div>

        <div class="form-group">
          <label for="content">Content</label>
          <input type="content" class="form-control" id="content" placeholder="Article title" />
        </div>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>

      </form>


    </section>
  )
}

export default NewArticle