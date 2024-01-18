import React from 'react'

const _NewArticle = ({ alert, handleSubmit }) => {
    return (
        <>
            <section className="article-form container">
                <h3 className="text-white">Create Articles</h3>
                <div className={alert ? "alert alert-primary" : " "} role="alert">
                    <p>{alert}</p>
                </div>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">Title</label>
                        <input type="title" className="form-control" id="title" aria-describedby="name" placeholder="Enter article title" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content"
                         rows="10"
                         placeholder="Article Content"
                         ></textarea>
                  
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>

                </form>


            </section>
        </>
    )
}

export default _NewArticle