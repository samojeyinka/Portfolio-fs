import React from 'react'
import Projects from '../components/Projects'
import Articles from '../components/Articles'
import NewProject from '../components/NewProject'

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h2 className='text-center text-white p-3'>Dashboard</h2>
      <div className="d-con">
     <div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Projects</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Articles</button>
    <button class="nav-link active" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Add Projects</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Add Articles</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      <div className="projects-tab">
        <Projects/>
      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <div className="articles-tab">
        <Articles/>
      </div>
    </div>
    <div class="tab-pane fade show active" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div className="new-project-tab">
        <NewProject/>
      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">New Article</div>
  </div>
  </div>
</div>
    </section>
  )
}

export default Dashboard