import React from 'react'
import axios from 'axios';

const NewProject = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append("project[name]", e.target.name.value);
        data.append("project[description]", e.target.description.value);
        data.append("project[details]", e.target.details.value);
        data.append("project[live_preview_link]", e.target.live_preview_link.value);
        data.append("project[source_code_link]", e.target.source_code_link.value);
        data.append("project[image]", e.target.image.files[0]);
       
        try {
           const res = await axios.post("http://localhost:3000/api/v1/projects",data, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
           });

            
        } catch (error) {
            console.error(error)
        }

    };

  return (
    <section className="project-form">
        <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
        <br />
        <label htmlFor="details">details</label>
        <input type="text" name="details" id="details" />
        <br />

        <label htmlFor="live_preview_link">live_preview_link</label>
        <input type="text" name="live_preview_link" id="live_preview_link" />
        <br />

        <label htmlFor="source_code_link">live_preview_link</label>
        <input type="text" name="source_code_link" id="source_code_link" />
        <br />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />
        <button type="submit">Post</button>
      </form>
    </section>
  )
}

export default NewProject