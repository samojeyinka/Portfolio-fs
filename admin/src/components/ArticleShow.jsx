import React from 'react'
import formatDate from '../utils/FormatDate';

const ArticleShow = ({title,content,createdAt}) => {
  return (
    <>
    <div className="sa-flex">
      <small>{formatDate(createdAt)}</small>
      <h2>{title}</h2>
      <div className='content'>{content}</div>
    </div>
    </>
  )
}

export default ArticleShow