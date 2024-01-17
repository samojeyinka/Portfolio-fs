import React, { useEffect, useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import axios from 'axios'
import formatDate from '../utils/FormatDate'
import { Link } from 'react-router-dom'
import '../assets/stylesheets/Articles.css'

const Articles = () => {

  const [articles, setArticles] = useState([]);


  const fetchArticles = async () => {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/articles/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    fetchArticles();
  }, []);



  return (
    <>
      <div className='articles'>
        <h3 className='text-white p-2'>Articles</h3>
        <div className="articles-flex">
          {/* article box start */}
          {articles.length < 1 ? (<div>
            <h5 className='text-center text-white'>No articles yet😒</h5>
          </div>) :

            articles.map(article => (
              <div>
                <div className="article-box">
                  <div className="article-date">
                    <p>{formatDate(article.created_at)}</p>
                  </div>
                  <div className="article-content">
                    <h4>{article.title}</h4>
                    <p>{truncateString(article.content, 200)}</p>
                    <div className="a-btns">
                      <Link to={`${article.title.replace(/ /g, '-')}?id=${article.id}`}><button>Read article <FaGreaterThan size={10} /></button></Link>
                      <button className='btn btn-info text-white'>Edit <FaGreaterThan size={10} /></button>
                      <button
                        className='btn btn-danger'
                        onClick={() => handleDelete(article.id)}
                      >Delete <FaGreaterThan size={10} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))

          }
          {/* article box end */}
        </div>
      </div>
    </>
  )
}

export default Articles