import React from 'react'
import formatDate from '../utils/FormatDate';
import { Link } from 'react-router-dom';
import noimage from '../assets/images/noimage.jpeg';

const ProjectShow = ({name,description,details,createdAt, 
 updatedAt,image, previewLink,sourceLink}) => {
  return (
    <>
    <div className="ps-flex">
                <div className="ps-top">
                    <div className="pst-left">
                        <b>{formatDate(createdAt)}</b>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className="ps-btns">
                           <Link to={`${previewLink}`}><button className='live'>Live preview</button></Link> 
                           <Link to={`${sourceLink}`}><button className='code'>Source code</button></Link>
                        </div>
                    </div>
                    <div className="pst-right">
                        <div className="p-image">
                            <img src={image || noimage}/>
                        </div>
                    </div>
                </div>
                <div className="ps-bottom">
                    <div className="details">
                        {details}
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProjectShow