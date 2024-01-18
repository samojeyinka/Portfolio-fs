import React from 'react'

const _NewProject = ({ alert, handleSubmit }) => {
  return (
    <>
      <section className="project-form container">
        <h3 className="text-white">Create Projects</h3>
        <div className={alert ? "alert alert-primary" : " "} role="alert">
          <p>{alert}</p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="name" className="form-control" id="name" aria-describedby="name" placeholder="Enter project name" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="description" className="form-control" id="description" placeholder="Project description" />
          </div>

          <div className="form-group">
            <label htmlFor="details">Details</label>
            <textarea className="form-control" id="details" placeholder="Project full details"
             rows="10"></textarea>
          </div>

          <div className="form-group bg-light mt-3 p-2">
            <label htmlFor="image" className='text-black'>Project thumbnail</label>
            <input type="file" className="form-control-file" id="image" />
          </div>

          <div className="form-group">
            <label htmlFor="live_preview_link">Preview link</label>
            <input type="details" className="form-control" id="live_preview_link" placeholder="Project preview link" />
          </div>


          <div className="form-group">
            <label htmlFor=" source_code_link">Code link</label>
            <input type="details" className="form-control" id="source_code_link" placeholder="Project source link" />
          </div>

          <button type="submit" className="btn btn-primary mt-3">Submit</button>

        </form>


      </section>
    </>
  )
}

export default _NewProject