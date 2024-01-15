import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ArticleShowPart from '../components/ArticleShow';
import Header from '../components/Header';
import Footer from '../components/Footer';







const ArticleShow = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const getArticle = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/articles/${id}`);
      const article = res.data;
      const {title,content,created_at} = article;
      setTitle(title);
      setContent(content);
      setCreatedAt(created_at);

    } catch (error) {
      console.error(error)
    }
}

useEffect(() => {
getArticle();
}); 


  return (
    <section className="show-articles">
      <Header/>
    <ArticleShowPart 
    createdAt={createdAt}
    title={title}
    content={content}
    />
    <Footer/>
    </section>
  )
}

export default ArticleShow