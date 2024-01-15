import React,{useEffect,useState} from 'react'
import {FaGreaterThan} from 'react-icons/fa'
import axios from 'axios'
import formatDate from '../utils/FormatDate'
import { Link } from 'react-router-dom'

const Articles = () => {

  const [articles, setArticles]  = useState([]);


  const fetchArticles = async() =>{
    try {
      const res = await axios.get('http://localhost:3000/api/v1/articles');
      const articles = res.data;
        setArticles(articles);
      console.log(articles);
    } catch (error) {
      console.log(error)
    }
  }

  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + '...';
  };
  

  useEffect(() => {
    fetchArticles();
  },[]);



  return (
    <>
    <div className='articles'>
      <h2>Writing on software development, project building, 
        and the technology industry.
        </h2>
        <p>All of my long-form thoughts on programming, leadership, software development, and more, collected in 
          chronological order.</p>

          <div className="articles-flex">
          
            {/* article box start */}

            {articles.length < 1 ? (<div>
              <h5>No articles yet😒</h5>
            </div>) :
            
            articles.map(article => (
                <Link to={`${article.title.replace(/ /g, '-')}?id=${article.id}`}>
                 <div className="article-box">
                 <div className="article-date">
                   <p>{formatDate(article.created_at)}</p>
                 </div>
                 <div className="article-content">
                   <h4>{article.title}</h4>
                     <p>{truncateString(article.content,200)}</p>
                        
                        <button>Read article <FaGreaterThan size={10}/></button>
                 </div>
               </div>
               </Link>
            ))
           
           }
           {/* article box end */}
          </div>
    </div>
    </>
  )
}

export default Articles